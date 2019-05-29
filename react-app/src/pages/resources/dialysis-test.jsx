import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components'
import 'mapbox-gl/dist/mapbox-gl.css';
import firebase from "../../firebase";
import { useSelector, useDispatch } from 'react-redux'
import { RESET_LISTING, SET_COUNTY, RESET_VIEWPORT, UNMOUNT_DIALYSIS, SET_DIALYSIS_LISTING, SET_CANCER_LISTING } from '../../state/constants'


// import "firebase/auth";
// import 'firebase/database';


import Header from '../../components/resources/test-header';
import SEO from '../../components/seo'
import Map from '../../components/resources/map'
// import Map from '../../components/resources/dialysis/dialysis-map'
import Panel from '../../components/resources/dialysis/dialysis-panel'

import { getDialysisData, getCancerData, getEMContacts } from '../../components/resources/parse'

const TOKEN = 'pk.eyJ1Ijoid2psaW0iLCJhIjoiY2plNGtpMXFpNmw3ZTMzcXA4a3l1NmdwOSJ9.2Ou7bageJ-DCfiASBrV5HA';
const mbxGeocode = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodeService = mbxGeocode({ accessToken: TOKEN });

const Container = styled.div`
  display: flex;
  // height: 100vh;
  overflow: hidden;
`;

export default function Dialysis() {
  const [dialysis, setDialysis] = useState([]);

  /**
   * Firebase Database Root Reference
   */
  const ref = firebase.database().ref("dialysis");

  /**
   * Redux selectors and dispatch 
   */
  const dispatch = useDispatch();
  const parentState = useSelector(state => state)
  const dialysisState = useSelector(state => state.dialysisReducer)

  useEffect(() => {
    return () => {
      dispatch({type: UNMOUNT_DIALYSIS})
      dispatch({type: RESET_VIEWPORT})
    }
  },[])

  useEffect(() => {
    // console.log(parentState)
  },[dialysisState])

  useEffect(() => {
    async function fetchData() {
      // let dialysisData = await getDialysisData();
      // let parsedKeys = dialysisData.map((object, index) => {
      //   return object.facilityName
      // })

      ref.on('value', async snapshot => {
        let value = snapshot.val()
        let databaseKeys = value.map((object) => {
          return object.facilityName
        })
        // if (arraysMatch(parsedKeys, databaseKeys)) {
        //   let array = await checkCoordinates(value)
        //   ref.set(array)
        //   dispatch({type: "SET_DIALYSIS_DATA", payload: value})
        // } else {
        //   // doesn't actually do anything yet
        //   appendData()
        // }
        dispatch({type: "SET_DIALYSIS_DATA", payload: value})
      })
    }
    fetchData();
  },[])

  function appendData() {

  }

  async function requestCoordinates(string) {
    return await geocodeService.forwardGeocode({
      query: string,
      limit: 1
    })
    .send()
    .then(response => {
      return response.body.features[0].center
    })
  }

  async function checkCoordinates(data) {
    return await Promise.all(data.map(async (object) => {
      if (!object.hasOwnProperty('coords')) {
        let query = object.addressLine1 + " " + object.Zip
        let coordinates = await requestCoordinates(query)
        console.log("if")
        return {...object, coords: coordinates}
      } else {
        console.log("else")
        return object
      }
    }))
  }

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

  return (
    <>
      <SEO title="Dialysis Centers"/>
      <Header />
      <Container>
        <Panel state={dialysisState} />
        <Map state={dialysisState} setListing={SET_DIALYSIS_LISTING} />
      </Container>
    </>
  )
}