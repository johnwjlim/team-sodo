import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  z-index: 20;  
  margin: 0 auto;
  padding: 2.5rem 0;
  text-align: center;
  // top: 6vh;
  // top: 20vh;
  top: 23vh;
`;

const Header = styled.h1`
  font-weight: 700;
  // font-size: 48pt;
  font-size: 42pt;
  letter-spacing: 10px;
  color: white;

  @media (max-width: 768px) {
    font-size: 28pt;
  }
`;

const Subtitle = styled.p`
  color: #484848;
  font-weight: 300;
  font-size: 20pt;
  line-height: 1;
  color: white;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 14pt;
  }
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
