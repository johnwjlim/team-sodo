import React from "react"
import styled from "styled-components"
import { Link } from '@reach/router'

const Wrap = styled.div`
  position: sticky;
  position: -webkit-sticky;   
  // position: relative;
  top: 0;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.88);
  margin: 0 auto;
`;

const Container = styled.div`
  // top: 0;
  // left: 14vw;
  // width: 100%;
  // max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  color: #333333;
  // color: ${props => props.white ? "white" : "#333333"};
`;

const Title =  styled(Link)`
  font-family: neue-haas-unica;
  text-decoration: none;
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 6px;
  color: #333333;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  // font-family: neue-haas-unica;
  text-decoration: none;
  font-size: 16px;
  margin-left: 2.5rem;  
  color: #333333;
  letter-spacing: -0.3px;
`;

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Wrap>
        <Container>
          <Title to="/">RARET</Title>
          <Links>
            <StyledLink to="/">About</StyledLink>
            <StyledLink to="/cancer">Cancer Facilities</StyledLink>
            <StyledLink to="/dialysis">Dialysis Facilities</StyledLink>
            <StyledLink to="/em-contacts">Emergency Manager Contacts</StyledLink>
            <StyledLink to="/prepare">Preparedness</StyledLink>
            <StyledLink to="/test">Road Alerts</StyledLink>
          </Links>
        </Container>
      </Wrap>
    )
  }
}

export default Header;