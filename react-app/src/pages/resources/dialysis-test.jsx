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
import Panel from '../../components/resources/dialysis/dialysis-panel'

import { getDialysisData } from '../../components/resources/parse'

const TOKEN = 'pk.eyJ1Ijoid2psaW0iLCJhIjoiY2plNGtpMXFpNmw3ZTMzcXA4a3l1NmdwOSJ9.2Ou7bageJ-DCfiASBrV5HA';
const mbxGeocode = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodeService = mbxGeocode({ accessToken: TOKEN });

const Container = styled.div`
  display: flex;
  // height: 100vh;
  overflow: hidden;
`;

export default function Dialysis() {
  const ref = firebase.database().ref("dialysis");
  const dispatch = useDispatch();
  const dialysisState = useSelector(state => state.dialysisReducer)

  useEffect(() => {
    return function cleanup() {
      dispatch({type: UNMOUNT_DIALYSIS})
      dispatch({type: RESET_VIEWPORT})
    }
  },[])

  useEffect(() => {
    async function fetchData() {
      ref.on('value', async snapshot => {
        let value = snapshot.val()
        if (!checkCoordinates(value)) {
          let updatedArray = await getCoordinates(value)
          ref.set(updatedArray);
        }
        dispatch({type: "SET_DIALYSIS_DATA", payload: value})
      })
    }
    fetchData();
  },[])

  /**
   * This effect runs on initial component mount and appends the database if necessary
   */
  useEffect(() => {
    appendData()
  }, [])

  /**
   * This function parses the source CSV and compares the result to database contents. 
   * Function will rewrite the database at the relevant ref if parsed data does not match data contained in database.
   * This function should only be executed once on component mount
   */
  function appendData() {
    ref.once('value').then( async snapshot => {
      let parse = await getDialysisData()
      if (parse.length > 0) {
        if (!arraysMatch(parse, snapshot.val())) {
          ref.set(parse)
        }
      }
    })
  }

  /**
   * Checks if objects in array have coordinates. Returns false if an object does not have coordinates
   * 
   * @param {Array} data - array of listing objects 
   * @return {Boolean}
   */
  async function checkCoordinates(data) {
    for (var object of data) {
      if (!object.hasOwnProperty('coords')) {
        return false
      }
    }
    return true;
  }

  /**
   * This function requests coordinates of a given location using Mapbox's Forward Geocode Service
   * 
   * @param {String} string - Query string
   * @return {Array} - Returns coordinates in an array: [longitude, latitidue]
   */
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

  /**
   * 
   * @param {Array} data - Array of listing objects  
   * @return {Array} - Array of listing objects with updated coordinates from Mapbox
   */
  async function getCoordinates(data) {
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

  /**
   * Iteratively compares 2 arrays to see determine if they match. Returns true if arrays match. 
   * 
   * @param {Array} arr1 - First array to be compared
   * @param {Array} arr2 - Second array to be compared
   * @return {Boolean} - Returns true if arrays match, false if arrays do not match
   */
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