import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import {snohomishAlerts, kingAlerts} from "../components/Robin Datascrape Files/alerts"

import Header from "../components/main-header"
import Layout from "../components/layout"


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

const dict = snohomishAlerts();

class Roads extends React.Component {
  constructor() {
    super();
    this.state = ({dict: ""})
  }

  async componentWillMount() {
    const snoho = await snohomishAlerts();
    console.log(snoho);
  }
  

  render() {
    // const object = snohomishAlerts();
    // console.log(object)
    return (
      <>
        <Header/>
        {/* <p>{dict}</p> */}
        <Container>
          <Title>King County Road Conditions</Title>
          <Card>
            <CardSubtitle>ROAD ALERT</CardSubtitle>
            <CardTitle>Road Restriction</CardTitle>
            <Content>
              <Column style={{marginRight: "1.5em"}}>
                <Img fluid={this.props.data.map.childImageSharp.fluid}/>
              </Column>
              <Column style={{marginLeft: "1.5em"}} >
                <TitleBox>
                  <RoadName>SW 108th Street at 8th Avenue SW </RoadName>
                </TitleBox>
                <TextBox>
                  <Label>DESCRIPTION</Label>
                  <Text>Installation of thermoplastic markings and chain link fence, along with painting and project clean-up work requiring lane restrictions March 4-22. Work hours are weekdays from 7 a.m. to 5 p.m. Some of this work is weather dependent and requires dry pavement. Motorists should expect delays.</Text>
                </TextBox>
                <TextBox>
                  <Label>TIME</Label>
                  <Text>1/7/2019 10:00AM PST</Text>
                </TextBox>
                <TextBox>
                  <Label>REGION</Label>
                  <Text>White Center</Text>
                </TextBox>
              </Column>
          </Content>
          </Card>
        </Container>
      </>
    )
  }
}

export default Roads;

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