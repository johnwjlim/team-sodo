import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  z-index: 20;  
  margin: 0 auto;
  padding: 2.5rem 0;
  text-align: center;
  top: 6vh;
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 48pt;
  letter-spacing: 10px;
  color: white;
`;

const Subtitle = styled.p`
  color: #484848;
  font-weight: 400;
  font-size: 22pt;
  line-height: 1;
  color: white;
  letter-spacing: 0.5px;
`;

const Dash = styled.div`
  padding-top: 3.75rem;
  border-bottom: solid 1px #767676;
`;


class Title extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Header>RARET</Header>
        <Subtitle>Regional Alliance for Resilient and Equitable Transportation</Subtitle>
        {/* <Dash/> */}
      </Container>
    )
  }
}

export default Title;