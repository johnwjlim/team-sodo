import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrap = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  z-index: 50;
  background-color: white;
`;

const Container = styled.div`
  top: 0;
  left: 14vw;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  color: #333333;
  // color: ${props => props.white ? "white" : "#333333"};
`;

const Title =  styled(Link)`
  font-family: neue-haas-unica;
  text-decoration: none;
  font-weight: 600;
  font-size: 28px;
  letter-spacing: 7px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-family: neue-haas-unica;
  text-decoration: none;
  font-size: 16px;
  margin-left: 3rem;  
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
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/resources">Resources</StyledLink>
            <StyledLink to="/roadalerts">Road Alerts</StyledLink>
          </Links>
        </Container>
      </Wrap>
    )
  }
}

export default Header;