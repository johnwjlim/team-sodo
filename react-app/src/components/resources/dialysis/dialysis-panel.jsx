import React, { useState, useEffect } from 'react'
import styled from 'styled-components' 
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_LISTING, SET_DIALYSIS_LISTING } from '../../../state/constants'

import SegmentedControl from '../segmentedControl'
import Card from "../card"
import Listing from "./listing"
// import Header from "./panel-header"

const Wrap = styled.div`
  display: block;
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 23em;
  z-index: 1;
  background-color: white;
  padding: 1.5em;
  // height: 80vh;
  height: 100%;
  flex-shrink: 0;
  padding-bottom: 0;
`

const Title = styled.h2`
  margin: 0;
  // margin-top: 1em
`

const Subtitle = styled.h4`
  font-weight: 400;
  // margin-bottom: 2em;
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
  const activeCounty = useSelector(state => state.dialysisReducer.activeCounty)
  const data = useSelector(state => state.dialysisReducer.data)
  const dispatch = useDispatch()
  const activeListing = useSelector(state => state.dialysisReducer.activeListing)

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } 

  function compileList() {
    if (data.length !== 0) {
      if (activeCounty === "ALL") {
        return renderList(data)
      } else {
        let array = [];
        data.forEach((object, index) => {
          if (object.County === activeCounty) {
            array.push(object)
          }
        })
        // console.log(array);
        return renderList(array);
      }
    } else {
      return (
      <h4>Loading...</h4>
      )
    }
  }

  function setActive(data) {
    let raw = data.Location;
    let lat = data.coords[1]
    let long = data.coords[0]
    let listing = {...data, latitude: lat, longitude: long}
    // console.log(listing);
    dispatch({type: SET_DIALYSIS_LISTING, payload: data})
    
  }

  function renderList(data) {
    return data.map((object, index) => {
      return (
        <ListItem key={index} onClick={() => setActive(object)}>
          <Card object={object} category={"dialysis"} index={index}/>
        </ListItem>
      )
    })
  }


  return (
    <Wrap>
      {/* <Header /> */}
      <Container>
        {
          Object.keys(activeListing).length === 0 ? 
          <>
            <Title>Dialysis Centers</Title>
            <Subtitle>Dialysis centers in the Puget Sound region</Subtitle>
            <SegmentedControl category={"dialysis"} />
            <List>
              {/* <Card /> */}
              {compileList()}
            </List> 
          </>:
          <Listing object={activeListing} />
        }
      </Container>
    </Wrap>
  )
}

