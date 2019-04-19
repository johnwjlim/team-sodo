import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import {snohomishAlerts, kingAlerts} from "../components/Robin Datascrape Files/alerts"
import {Card} from 'react-bootstrap';
import Header from "../components/main-header"
import ListingCard from "../components/listingCard" 

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight)

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 1.25rem;
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

class KingAlerts extends React.Component {
  constructor() {
    super();
    this.state = {
      dict: null,
      active: false,
    };
  }
  
  async componentWillMount() {
    const dictionary = await kingAlerts();
    // console.log(dictionary);
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
    console.log(this.state.activeListing);

    return (
      <>
        <Header/>
        <Container>
          <Title>King County Road Conditions</Title>
          { 
            this.state.active ?
            <ListingCard 
              map={this.props.data.map} 
              onClose={() => this.setState({active: false})}
              activeListing={this.state.activeListing}
            /> : this.renderList()
            }
        </Container>
      </>
    )
  }

}

export default KingAlerts;

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