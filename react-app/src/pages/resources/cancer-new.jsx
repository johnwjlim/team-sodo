import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components'
import 'mapbox-gl/dist/mapbox-gl.css';
import firebase from "../../firebase";
import { useSelector, useDispatch } from 'react-redux'
import { RESET_LISTING, SET_COUNTY, RESET_VIEWPORT, SET_CANCER_DATA, UNMOUNT_CANCER } from '../../state/constants'
import Panel from "../../components/resources/cancer/panel"
import Map from "../../components/resources/map"

import { getCancerData } from '../../components/resources/parse'

import Header from '../../components/resources/test-header';
import SEO from '../../components/seo';

const TOKEN = 'pk.eyJ1Ijoid2psaW0iLCJhIjoiY2plNGtpMXFpNmw3ZTMzcXA4a3l1NmdwOSJ9.2Ou7bageJ-DCfiASBrV5HA';
const mbxGeocode = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodeService = mbxGeocode({ accessToken: TOKEN });

const Container = styled.div`
  display: flex;
  // height: 100vh;
  overflow: hidden;
`;

export default function Cancer() {
  const ref = firebase.database().ref("cancer");
  const dispatch = useDispatch();
  const cancerState = useSelector(state => state.cancerReducer)
  const parentState = useSelector(state => state)

  useEffect(() => {
    return function cleanup() {
      dispatch({type: RESET_VIEWPORT})
      dispatch({type: UNMOUNT_CANCER})
    }
  },[])

  useEffect(() => {
    console.log(parentState)
  },[cancerState])

  useEffect(() => {
    ref.on('value', async snapshot => {
      let value = snapshot.val()
      if (!checkCoordinates(value)) {
        let updatedArray = await getCoordinates(value)
        ref.set(updatedArray);
      }
      dispatch({type: SET_CANCER_DATA, payload: value})
    })
  }, [])

   /**
   * This effect parses the source CSV and compares the result to database contents. 
   * Function will rewrite the database at the relevant ref if parsed data does not match data contained in database.
   * This function should only be executed once on component mount
   */
  useEffect(() => {
    function appendData() {
      ref.once('value').then(async snapshot => {
        let parse = await getCancerData()
        if (parse.length > 0) {
          if (!arraysMatch(parse, snapshot.val())) {
            // TODO: rewrite databse
            ref.set(parse)
          }
        }
      })
    }
    appendData()
  }, [])

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

  async function getCoordinates(data) {
    return await Promise.all(data.map(async (object) => {
      if (!object.hasOwnProperty('coords')) {
        let query = object.addressLine1 + " " + object.city
        let coordinates = await requestCoordinates(query)
        return {...object, coords: coordinates}
      } else {
        return object
      }
    }))
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
      <SEO title={"Cancer Centers"} />
      <Header />
      <Container>
        <Panel/>
        <Map state={cancerState} setListing={"SET_CANCER_LISTING"} />
      </Container>
    </>
  )
}