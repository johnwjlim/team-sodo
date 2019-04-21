import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { Transition } from "react-transition-group"

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


export default function ListingCard(props) {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  })

  const duration = 200;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    padding: "1em 0",
    }
  
  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      { state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          <Card>
            <TopBar>
              <CardSubtitle>ROAD ALERT</CardSubtitle>
              <CloseButton onClick={() => props.onClose()}>X</CloseButton>
            </TopBar>
            <CardTitle>Road Restriction</CardTitle>
            <Content>
              <Column style={{marginRight: "1.5em"}}>
                <StyledImage src={placeholder}/>
              </Column>
              <Column style={{marginLeft: "1.5em"}} >
                <TitleBox>
                  <RoadName>{props.activeListing.name}</RoadName>
                </TitleBox>
                <TextBox>
                  <Label>DESCRIPTION</Label>
                  <Text>{props.activeListing.info.desc}</Text>
                </TextBox>
                <TextBox>
                  <Label>TIME</Label>
                  <Text>{props.activeListing.info.date}</Text>
                </TextBox>
                {/* <TextBox>
                  <Label>REGION</Label>
                  <Text>White Center</Text>
                </TextBox> */}
              </Column>
            </Content>
          </Card>
        </div>
      )}
    </Transition>

  )
}
