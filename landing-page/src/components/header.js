import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logo from "../images/Team-Sodo-Logo-White.svg"

const Logo = styled.img`
  max-width: 6rem;
  margin: 0;
`;

const HeroText = styled.h1`
  text-align: center;
  color: white;
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
      marginBottom: `1.25rem`,
      zIndex: `20`,
      position: `relative`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        marginTop: `2rem`,
        maxWidth: 1080,
        padding: `0.65em 1.0875rem`,
      }}
    >
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} style={{maxWidth: "5em"}}></img>
        </Link>
      </h1> */}
      <Link to="/" style={{textDecoration: `none`}}> 
          <Logo src={logo}></Logo>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
