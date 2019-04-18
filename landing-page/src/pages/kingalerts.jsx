import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import {snohomishAlerts, kingAlerts} from "../components/Robin Datascrape Files/alerts"

import Header from "../components/main-header"

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

const Card = styled.div`
  border: solid 1px #dddddd;
  border-radius: 8px;
  padding: 1em 1.5em; 
`;

const CardSubtitle = styled.h4`
  font-family: neue-haas-unica, sans-serif; 
  color: #8E8E93;
  font-weight: 500;
  font-size: 17px;
`;

const CardTitle = styled.h2`
  font-family: neue-haas-unica, sans-serif;
  color: #484848;
  font-weight: 500;
  margin: 1.5rem 0;
  font-size: 28px;
  letter-spacing: -0.3px;
`;

const Content = styled.div`
  display: flex;
  padding: 1em 0;
`;

const Column = styled.div`
  flex: 1;
`;

const TextBox = styled.div`
  border-bottom: 0.5px solid #dddddd;
  padding: 1em 0; 
`;

const TitleBox = styled(TextBox)`
  padding-top: 0;
`;

const RoadName = styled.h2`
  font-family: neue-haas-unica, sans-serif; 
  font-weight: 500;
  font-size: 28px;
  letter-spacing: -0.5px;
`;

const Label = styled.h6`
  font-family: neue-haas-unica, sans-serif; 
  font-weight: 500;
  font-size: 14px;
  color: #8E8E93;
  margin-bottom: 1em;
`;

const Text = styled.p`
  font-family: neue-haas-unica, sans-serif;
  font-size: 16px;
  color: #333333;
`;

class KingAlerts extends React.Component {
  constructor() {
    super();
    this.state = {
      dict: "",
      active: false,
    };
  }
  
  async componentWillMount() {
    const dictionary = await kingAlerts();
    console.log(dictionary);
    this.setState({dict: dictionary});
  }

  renderList() {
    if (this.state.dict !== null) {
      const keys = Object.keys(this.state.dict);
      return (
        <ul>
          {keys.map(title => {
            console.log(this.state.dict.title);
            return (
              <li key={title} onClick={() => this.setState({activeListing: title})}>
                {title}
              </li>
            )
          })}
        </ul>
      )
    }
  }




  render() {
    // console.log(this.state);
    const active = this.state.activeListing;
    const dictionary = this.state.dict;
    // console.log(active)

    return (
      <>
        <Header/>
        <Container>
          <Title>King County Road Conditions</Title>
          
          { 
            this.state.active ?
            <></> : this.renderList()
            }
        </Container>
      </>
    )
  }

}

export default KingAlerts;