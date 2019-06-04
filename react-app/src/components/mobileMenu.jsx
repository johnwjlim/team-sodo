import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from '@reach/router'

const Container = styled.div`
  position: absolute; 
  height: 100vh;
  width: 100vw;
  z-index: 20;
  background-color: white;
  left: 0;
  top: 3.5em;
`;

const Menu = styled.nav`
  padding: 1.5em;v
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  margin: 0.5rem;
  padding-bottom: 1.5rem;
  color: #333333;
  letter-spacing: -0.3px;

`

const Dash = styled.div`
  border-bottom: 1px solid #C5C5C5;
  margin: 1rem 0;
`

export default function MobileMenu(props) {
  return (
    <>
      <Container>
        <Menu>
          <StyledLink to="/">Home</StyledLink>
          <Dash />
          <StyledLink to="/cancer">Cancer Facilities</StyledLink>
          <Dash />
          <StyledLink to="/dialysis">Dialysis Facilities</StyledLink>
          <Dash />
          <StyledLink to="/em-contacts">Emergency Manager Contacts</StyledLink>
          <Dash />
          <StyledLink to="/prepare">Preparedness</StyledLink>
          <Dash />
          <StyledLink to="/test">Road Alerts</StyledLink>
          <Dash />
        </Menu>
      </Container>
    </>
  )
}