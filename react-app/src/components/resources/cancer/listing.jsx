import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { RESET_LISTING, RESET_VIEWPORT, SET_KING, SET_SNOHOMISH, SET_PIERCE } from "../../../state/constants"

const Container = styled.div``;

const Title = styled.h2`
  margin: 0;
`

const Subtitle = styled.h4`
  font-weight: 400;
  // margin: 0;
`

const BackControl = styled.h4`
  font-weight: 400;
  margin: 0;
  margin-left: 0.5rem;

  // ${StyledLink}:hover & {
  //   color: #767676;
  // }

  &:hover {
    color: #767676;
  }
`

const StyledLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  &:hover {
    color: #767676;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  overflow: scroll;
  height: 75vh;
`;

const ListItem = styled.li`
  border-bottom: 1px solid #c5c5c5;
  padding: 1rem 0;
`;

const MicroText = styled.h5`
  color: #767676;
  font-weight: 600;
  margin-bottom: 0.5rem
`

const Text = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
`


export default function Listing(props) {
  const dispatch = useDispatch()
  const county = useSelector(state => state.categoryReducer.activeCounty)

  useEffect(() => {
    console.log(props.object)
    return () => goBack()
  }, [])

  function goBack() {
    dispatch({type: RESET_LISTING})
    // dispatch({type: RESET_VIEWPORT})
    if (county === "ALL") {
      dispatch({type: RESET_VIEWPORT})
    } else if (county === "KING") {
      dispatch({type: SET_KING})
    } else if (county === "SNOHOMISH") {
      dispatch({type: SET_SNOHOMISH})
    } else if (county === "PIERCE") {
      dispatch({type: SET_PIERCE})
    }
  }

  // function renderSubtitle() {
  //   let city = manipulateString(props.object.City)
  //   let county = props.object.County.charAt(0) + props.object.County.slice(1).toLowerCase()
  //   return city + " | " + county + " County"
  // }

  function renderSubtitle() {
    return props.object.addressLine1
  }

  function manipulateString(string) {
    let stringArray = string.split(' ');
    let result = ""
    stringArray.forEach((string) => {
      result = result + " " + string.charAt(0) + string.slice(1).toLowerCase();
    })
    return result;
  }

  return (
    <Container>
      <StyledLink onClick={() => goBack()}>
        {/* <i className="material-icons" style={{fontSize: "28px", color: "#333333"}}>chevron_left</i> */}
        <i className="material-icons" >chevron_left</i>
        <BackControl>Cancer Centers</BackControl>
      </StyledLink>
      <Title>{props.object.facilityName}</Title>
      {/* <Subtitle>{renderSubtitle()}</Subtitle> */}
      <List>
        <ListItem>
          <MicroText>Address Line 1</MicroText>
          <Text>{props.object.addressLine1}</Text>
        </ListItem>
        <ListItem>
          <MicroText>Address Line 2</MicroText>
          <Text>{props.object.city}</Text>
        </ListItem>
        <ListItem>
          <MicroText>Phone Number</MicroText>
          <Text>{props.object.phone}</Text>
        </ListItem>
      </List>
    </Container>
  )
} 