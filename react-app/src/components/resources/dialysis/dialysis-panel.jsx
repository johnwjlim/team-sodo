import React, { useState, useEffect } from 'react'
import styled from 'styled-components' 
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_LISTING } from '../../../state/constants'

import SegmentedControl from '../segmentedControl'
import Card from "../card"
import Listing from "./listing"


const Container = styled.div`
  position: relative;
  height: 100%;
  width: 23em;
  z-index: 1;
  background-color: white;
  padding: 1.5em;
  // height: 80vh;
  height: 100%;
  flex-shrink: 0;
`

const Title = styled.h2`
  margin: 0;
`

const Subtitle = styled.h4`
  font-weight: 400;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  overflow: scroll;
  height: 75vh;
  // border-top: 1px solid #c5c5c5;
`;

const ListItem = styled.li`
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #f9f9f9;
  }
`;



export default function Panel() {
  const activeCounty = useSelector(state => state.categoryReducer.activeCounty)
  const data = useSelector(state => state.categoryReducer.data.dialysis)
  const dispatch = useDispatch()
  const activeListing = useSelector(state => state.listingReducer.activeListing)

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } 

  function compileList() {
    if (data != null) {
      if (activeCounty === "ALL") {
        return renderList(data)
      } else {
        let array = [];
        data.forEach((object, index) => {
          if (object.County === activeCounty) {
            array.push(object)
          }
        })
        console.log(array);
        return renderList(array);
      }
    }
  }

  function setActive(data) {
    let raw = data.Location;
    let lat = parseFloat(raw.slice(1, raw.indexOf(",")))
    let long = parseFloat(raw.slice(raw.indexOf(" ") + 1, raw.indexOf(")")))
    let listing = {...data, latitude: lat, longitude: long}
    dispatch({type: UPDATE_LISTING, payload: listing})
    
  }

  function renderList(data) {
    return data.map((object, index) => {
      return (
        <ListItem key={index} onClick={() => setActive(object)}>
          <Card object={object} index={index}/>
        </ListItem>
      )
    })
  }


  return (
    <Container>
      {
        Object.keys(activeListing).length === 0 ? 
        <>
          <Title>Dialysis Centers</Title>
          <Subtitle>Dialysis centers in the Puget Sound region</Subtitle>
          <SegmentedControl />
          <List>
            {/* <Card /> */}
            {compileList()}
          </List> 
        </>:
        <Listing object={activeListing} />
      }
    </Container>
  )
}

