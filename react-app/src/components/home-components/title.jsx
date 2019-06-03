import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  top: 30vh;
  z-index: 20;
  text-align: center;
  padding: 0 1.25em;

  @media (max-width: 768px) {
    top: 19vh;
  }
`;

const Header = styled.h1`
  letter-spacing: 10px;
  font-size: 2.8em;
  color: white;
  margin: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Subheader = styled.h2`
  font-weight: 400;
  color: white;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export default function Title() {
  return (
    <Container>
      <Header aria-label="title header">RARET</Header>
      <Subheader aria-label="subheader">Regional Alliance for Resilient and Equitable Transportation</Subheader>
    </Container>
  )
}



