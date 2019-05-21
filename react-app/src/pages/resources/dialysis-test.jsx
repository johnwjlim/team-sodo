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

export default function Dialysis() {
  const [dialysis, setDialysis] = useState([]);
  const [cancer, setCancer] = useState([]);
  const [emContact, setEmContact] = useState([]);

  /**
   * Firebase Database Root Reference
   */
  const ref = firebase.database().ref("dialysis");

  /**
   * Redux selectors and dispatch 
   */
  const dispatch = useDispatch();
  const parentState = useSelector(state => state)

  useEffect(() => {
    dispatch({type: RESET_LISTING})
  },[])


  useEffect(() => {
    async function fetchData() {
      let dialysisData = await getDialysisData();
      let parsedKeys = dialysisData.map((object, index) => {
        return object.facilityName
      })

      // ref.once('value')
      //   .then(((snapshot) => {
      //     let value = snapshot.val()
      //     dispatch({type: "SET_DIALYSIS_DATA", payload: value});
      //   }))
      ref.on('value', snapshot => {
        let value = snapshot.val()
        let databaseKeys = value.map((object) => {
          return object.facilityName
        })

        // check keys
        if (arraysMatch(parsedKeys, databaseKeys)) {
          // check coordinates
          dispatch({type: "SET_DIALYSIS_DATA", payload: value})
        } else {
          // append and set new items
        }
      })
    }
    fetchData();
  },[])



  function handleData(parsedArray, databaseArray) {
    if (arraysMatch(databaseArray, parsedArray)) {
      // handle coordinates

    } else {

      let existingFacilities = databaseArray.map((object, index) => {
        return object.facilityName
      })

      let newStuff = parsedArray;
      newStuff.forEach((object, index) => {
        if (existingFacilities.includes(object.facilityName)) {
          newStuff.splice(index, 1)
        }
      })
    }
  }

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