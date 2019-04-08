import { Link } from 'gatsby'
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Headroom from 'react-headroom'

import { Waypoint } from 'react-waypoint'

const Container = styled.div`
  position: sticky;
  position: -webkit-sticky;
  // position: relative;
  top: 0;
  display: ${props => props.display ? "flex" : "none" };
  max-width: 1200px;
  color: white;
  margin: 0 auto;
  z-index: 30;
`;

const Col = styled.div`
  margin: 0 1.25rem;
`;

const Title = styled.a`
  font-weight: 500;
  font-size: 14pt;
  color: #767676;
`;

class Header extends React.Component {
  constructor() {
    super();
    this.state = {display: true};
  }
  
  // componentDidMount() {
  //   console.log(this.state.display);
  // }

  _handleEnter() {
    this.setState({display: true});
    console.log("waypoint entered");
    console.log(this.state.display);
  }

  _handleLeave() {
    this.setState({display: false});
    console.log("waypoint left");
    console.log(this.state.display);
  }

  render() {
    return(
      <Headroom
          
      >
        <Waypoint
          onEnter={this._handleEnter}
          onLeave={this._handleLeave}
        />
        <Container display={this.state.display}>
          <Col>
            <Title>Stuff</Title>
          </Col>
          <Col>
            <Title>{this.state.display}</Title>
          </Col>
          <Col>
            <Title>Three</Title>
          </Col>
        </Container>
      </Headroom>
    )
  }
}

export default Header;