import React from "react"
import styled from "styled-components"
import {snohomishAlerts, kingAlerts} from "../components/Robin Datascrape Files/alerts"
import {Card, Navbar, Nav} from 'react-bootstrap';
import Header from "../components/main-header"
import ListingCard from "../components/listingCard" 

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight)

const Container = styled.div`
  position: relative;
  z-index: 20;
  // padding: 1.25rem 0;
  padding: 0.5rem 0;
  padding-bottom: 0;
  background: #ffffff;
  justifyContent: 'space-between'
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1.25rem;
  margin-top: 0;
`;

const Header2 = styled.h1`
  padding-top: 1rem;
`;
const Line = styled.div`
  border-bottom: solid 1.5px #000000;
`;

const Span = styled.span`
  padding-left: 120px;
  padding-right: 120px;
`;

const Title = styled.h1`
  font-family: neue-haas-unica, sans-serif;
  font-weight: 600;
  margin: 1.25em 0;
  font-size: 32px;
  letter-spacing: -0.3px;
`;

const cardStyle = {
  margin: '10px',
  borderRadius: '10px'
}

class SnohomishAlerts extends React.Component{
    constructor() {
      super();
      this.state = {
        dict: null,
        active: false,
      };
    }
    
    async componentWillMount() {
      const dictionary = await snohomishAlerts();
      console.log(dictionary);
      this.setState({dict: dictionary});
    }

    renderList() {
      if (this.state.dict !== null) {
        const list = this.state.dict;
        return (
          <ul>
            {list.map(object => {
              return (
                <Card style ={cardStyle}>
                <Card.Body>
                  <li key={object.name} onClick={() => {
                    this.setState({activeListing: object, active: true})}
                  }>
                  {object.name}
                </li>
                <FontAwesomeIcon icon="angle-right" size="2x" transform="right-450 up-8" />
                </Card.Body>
                </Card>
              )
            })}
          </ul>
        )
      }
    }

    render() {
      // console.log(this.state);
      // console.log(active)
      // console.log(this.state.activeListing);
  
      return (
        <>
          <Header/>
          <Container>
            <Title>Sonohomish County Road Conditions</Title>
            {this.renderList()}
          </Container>
        </>
      )
    }
  
  }
 

 export default SnohomishAlerts;

 export const query = graphql`
  {
    map:file(relativePath: {eq: "images/map-sample.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;