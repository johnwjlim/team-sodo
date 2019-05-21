import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { SET_COUNTY, SET_KING, RESET_VIEWPORT, SET_SNOHOMISH, SET_PIERCE } from "../../state/constants"

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
`

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const ControlTitle = styled.h4`
  margin: 0;
  color: ${props => props.active ? "#000000" : "#767676" };
  font-weight: ${props => props.active? "400" : "400"};
  border-bottom: ${props => props.active ? "solid 1px #000000" : "none"};

  &:hover {
    color: #333333;
  }
`;

export default function Control() {
  const county = useSelector(state => state.categoryReducer.activeCounty)
  const dispatch = useDispatch();

  function setActive(data) {
    let newCounty = data.toUpperCase();
    dispatch({type: SET_COUNTY, payload: newCounty } )
    if (newCounty === "ALL") {
      dispatch({type: RESET_VIEWPORT})
    } else if (newCounty === "KING") {
      dispatch({type: SET_KING})
    } else if (newCounty === "SNOHOMISH") {
      dispatch({type: SET_SNOHOMISH})
    } else if (newCounty === "PIERCE") {  
      dispatch({type: SET_PIERCE})
    }
  }

  function manipulation(string) {
    if (string === "All") {
      return "All Counties"
    } else {
      return string
    }
  }

  function createControls() {
    let titles = ["All", "King", "Snohomish", "Pierce"]
    return (
      titles.map((title, index) => {
        return (
          <StyledLink key={index} onClick={() => setActive(title)}>
            {
              county === title.toUpperCase() ?         
              <ControlTitle active>{manipulation(title)}</ControlTitle> :
              <ControlTitle>{manipulation(title)}</ControlTitle>
            }
          </StyledLink>
        )
      })
    )
  }
  return (
    <Container>
      {createControls()}
    </Container>
  )
}