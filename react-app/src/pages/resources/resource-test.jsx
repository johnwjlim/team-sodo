import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components'
import 'mapbox-gl/dist/mapbox-gl.css';
import firebase from "../../firebase";

import "firebase/auth";
import 'firebase/database';


import Header from '../../components/resources/test-header';
import SEO from '../../components/seo';


import Title from '../../components/resources/title'
import Map from '../../components/resources/resource-map'

import { getDialysisData, getCancerData, getEMContacts } from '../../components/resources/parse'

const HelloWorld =  'https://us-central1-raret-757bc.cloudfunctions.net/helloWorld'
const parseDialysis = 'https://us-central1-raret-757bc.cloudfunctions.net/parseDialysis'

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  position: relative;
  height: 100%;
  width: 23em;
  z-index: 1;
  background-color: white;
  padding: 1.5em;
  flex-shrink: 0;
`;


export default function Resources() {
  const [dialysis, setDialysis] = useState([]);
  const [cancer, setCancer] = useState([]);
  const [emContact, setEmContact] = useState([]);

  const rootRef = firebase.database().ref();

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
          let cancerDatabase = snapshot.child("cancer").val();
          if (arraysMatch(cancerDatabase, cancerData)) {
            console.log("arrays match!");
          } else {
            console.log("arrays do not match!");
          }
        }))

      // rootRef.set({dialysis: dialysisData, cancer: cancerData, em: emContactData})
      //   .then(() => console.log("set succeeded"));

    }
    // function callCloudFunction() {
    //   fetch(parseDialysis) 
    //     .then(data => {
    //       return data.json();
    //     })
    //     .then(object => {
    //       console.log(object);
    //     })
    // }
    fetchData();
  }, [])

  useEffect(() => {
    // console.log(dialysis);
    // console.log(cancer);
    // console.log(emContact);
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
    <SEO title="Resources"/>
    <Header />
    <Container>
      <Panel>
        <Title/>
        {loadChecker()}
      </Panel>
      <Map />
    </Container>
    </>
  )
}