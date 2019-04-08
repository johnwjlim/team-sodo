import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Headroom from "react-headroom"

const Container = styled.header`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  // position: absolute;  
  top: 0;
  left: 14vw;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  // color: #333333;
  color: ${props => props.white ? "white" : "#333333"};
`;

const Title =  styled(Link)`
  font-family: neue-haas-unica;
  text-decoration: none;
  font-weight: 600;
  font-size: 32px;
  letter-spacing: 7px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-family: neue-haas-unica;
  text-decoration: none;
  // font-weight: 500;
  font-size: 18px;
  margin-left: 3rem;  

`;

class Header extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Headroom>
        {
          this.props.display == 0 ?
          <Container>
            <Title to="/home">RARET</Title>
            <Links>
              <StyledLink to="/home">About</StyledLink>
              <StyledLink to="/resources">Resources</StyledLink>
              <StyledLink to="/roadalerts">Road Alerts</StyledLink>
            </Links>
          </Container> :
          <Container white>
            <Title to="/home">RARET</Title>
            <Links>
              <StyledLink to="/home">About</StyledLink>
              <StyledLink to="/resources">Resources</StyledLink>
              <StyledLink to="/roadalerts">Road Alerts</StyledLink>
            </Links>
          </Container>

        }
      </Headroom>
    )
  }
}

export default Header;