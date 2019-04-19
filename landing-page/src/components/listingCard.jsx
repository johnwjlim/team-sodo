import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby";
import Img from 'gatsby-image';

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
  line-height: 1.25;
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

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  cursor: pointer;
  background-color: none;
  border: none;
`;

class ListingCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Card>
        <TopBar>
          <CardSubtitle>ROAD ALERT</CardSubtitle>
          <CloseButton onClick={() => this.props.onClose()}>X</CloseButton>
        </TopBar>
        {/* <CardTitle>Road Restriction</CardTitle> */}
        <Content>
          <Column style={{marginRight: "1.5em"}}>
            <Img fluid={this.props.map.childImageSharp.fluid}/>
          </Column>
          <Column style={{marginLeft: "1.5em"}} >
            <TitleBox>
              <RoadName>{this.props.activeListing.name}</RoadName>
            </TitleBox>
            <TextBox>
              <Label>DESCRIPTION</Label>
              <Text>{this.props.activeListing.info.desc}</Text>
            </TextBox>
            <TextBox>
              <Label>TIME</Label>
              <Text>{this.props.activeListing.info.date}</Text>
            </TextBox>
            <TextBox>
              <Label>REGION</Label>
              <Text>White Center</Text>
            </TextBox>
          </Column>
        </Content>
      </Card>
    )
  }
}

export default ListingCard;
