import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { RESET_LISTING, RESET_VIEWPORT, SET_KING, SET_SNOHOMISH, SET_PIERCE, RESET_DIALYSIS_LISTING } from "../../../state/constants"

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
  const county = useSelector(state => state.dialysisReducer.activeCounty)

  useEffect(() => {
    return () => goBack()
  }, [])

  function goBack() {
    dispatch({type: RESET_DIALYSIS_LISTING})
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

  function renderSubtitle() { 
    let city = manipulateString(props.object.City)
    let county = props.object.County.charAt(0) + props.object.County.slice(1).toLowerCase()
    return city + " | " + county + " County"
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
        <i className="material-icons" >chevron_left</i>
        <BackControl>Dialysis Centers</BackControl>
      </StyledLink>
      <Title>{props.object.facilityName}</Title>
      <Subtitle>{renderSubtitle()}</Subtitle>
      <List>
        {/* <ListItem/> */}
        <ListItem>
          <MicroText>Address</MicroText>
          <Text>{props.object.addressLine1}</Text>
        </ListItem>
        <ListItem>
          <MicroText>ZIP</MicroText>
          <Text>{props.object.Zip}</Text>
        </ListItem>
        <ListItem>
          <MicroText>Phone Number</MicroText>
          <Text>{props.object.phoneNumber}</Text>
        </ListItem>
        <ListItem>
          <MicroText>Provider Number</MicroText>
          <Text>{props.object.providerNumber}</Text>
        </ListItem>
        {
          props.object.chainOwned === "TRUE" ?
          <ListItem>
            <MicroText>Organization</MicroText>
            <Text>{props.object.chainOrganization}</Text>
          </ListItem> :
          <></>
        }
      </List>
    </Container>
  )
} 