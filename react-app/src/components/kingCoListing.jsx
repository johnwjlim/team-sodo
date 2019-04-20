import React from "react"
import styled from "styled-components"

import placeholder from "../images/map-sample.png"

const Card = styled.div`
  // border: solid 1px #dddddd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5em; 
  background-color: white;
`;

const CardSubtitle = styled.h4`
  color: #8E8E93;
  font-weight: 500;
  margin: 0;
`;

const CardTitle = styled.h2`
  color: #484848;
  font-weight: 600;
  margin: 0.25em 0;
`;

const Content = styled.div`
  display: flex;
  padding: 1.5em 0;
`;

const Column = styled.div`
  flex: 1;
  // max-width: 0.5vw;
`;

const TextBox = styled.div`
  border-bottom: 0.5px solid #dddddd;
  padding: 1.5em 0; 
`;

const TitleBox = styled(TextBox)`
  padding-top: 0;
`;

const RoadName = styled.h2`
  font-weight: 500;
  // font-size: 26px;
  // letter-spacing: -0.5px;
  line-height: 1.35;
  margin: 0;
`;

const Label = styled.h5`
  font-weight: 500;
  color: #8E8E93;
  margin: 0;
  margin-bottom: 0.75em;
`;

const Text = styled.p`
  margin: 0;
  letter-spacing: -0.1px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  cursor: pointer;
  background-color: none;
  border: none;
  font-size: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  // max-width: 50%;
  height: auto;
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
        <CardTitle>Road Restriction</CardTitle>
        <Content>
          <Column style={{marginRight: "1.5em"}}>
            <StyledImage src={placeholder}/>
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
            {/* <TextBox>
              <Label>REGION</Label>
              <Text>White Center</Text>
            </TextBox> */}
          </Column>
        </Content>
      </Card>
    )
  }
}

export default ListingCard;
