import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components'
import 'mapbox-gl/dist/mapbox-gl.css';
import firebase from "../../firebase";
import { useSelector, useDispatch } from 'react-redux'
import { RESET_LISTING } from '../../state/constants'


import "firebase/auth";
import 'firebase/database';


import Header from '../../components/resources/test-header';
import SEO from '../../components/seo';
import Map from '../../components/resources/dialysis/dialysis-map'
import Panel from '../../components/resources/dialysis/dialysis-panel'

import { getDialysisData, getCancerData, getEMContacts } from '../../components/resources/parse'

const Container = styled.div`
  display: flex;
`;

export default function Resources() {
  const [dialysis, setDialysis] = useState([]);
  const [cancer, setCancer] = useState([]);
  const [emContact, setEmContact] = useState([]);

  /**
   * Firebase Database Root Reference
   */
  const rootRef = firebase.database().ref();

  /**
   * Redux selectors and dispatch 
   */
  const dispatch = useDispatch();
  const activeCategory = useSelector(state => state.categoryReducer.activeCategory)
  const activeData = useSelector(state => state.categoryReducer.data[activeCategory])

  useEffect(() => {
    async function fetchData() {
      let dialysisData = await getDialysisData();
      let cancerData = await getCancerData();
      let emContactData = await getEMContacts();
      setDialysis(dialysisData);
      setCancer(cancerData);
      setEmContact(emContactData);

      rootRef.once('value')
        .then(((snapshot) => {
          dispatch({type: "SET_DATA", payload: snapshot.val()});
        }))

    }
    fetchData();
    dispatch({type: RESET_LISTING})
  }, [])

  useEffect(() => {
    // console.log(activeCategory);
    // console.log(activeData);
  })

  function arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (var i = 0; arr1.length < i; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  function loadChecker() {
    if (dialysis.length < 1) {
      return <h4>Loading</h4>
    } else {
      return <h4>Load complete</h4>
    }
  }

  return (
    <>
      <SEO title="Dialysis Centers"/>
      <Header />
      <Container>
        <Panel />
        <Map />
      </Container>
    </>
  )
}