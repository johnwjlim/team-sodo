import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_LISTING } from '../../../state/constants'

import Card from "../card"
import Listing from "./listing"

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
  const activeCounty = useSelector(state => state.categoryReducer.activeCounty)
  const data = useSelector(state => state.categoryReducer.cancer)
  const dispatch = useDispatch()
  const activeListing = useSelector(state => state.listingReducer.activeListing)

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
        // console.log(array);
        return renderList(array);
      }
    } else {
      return (
      <h2>Loading...</h2>
      )
    }
  }

  function renderList(data) {
    return data.map((object, index) => {
      return (
        <ListItem key={index} onClick={() => setActive(object)} >
          <Card object={object} category={"cancer"} index={index}/>
        </ListItem>
      )
    })
  }

  function setActive(data) {
    let lat = data.coords[1]
    let long = data.coords[0]
    let listing = {...data, latitude: lat, longitude: long}
    // console.log(listing);
    dispatch({type: UPDATE_LISTING, payload: data})
    
  }


  return (
    <Wrap>
      <Container>
        {
          Object.keys(activeListing).length === 0 ?
          <>
            <Title>Cancer Centers</Title>
            <Subtitle>Cancer centers in the Puget Sound region</Subtitle>
            <List>
              {compileList()}
            </List>
          </> :
          <Listing object={activeListing} />
        }
      </Container>
    </Wrap>
  )
}