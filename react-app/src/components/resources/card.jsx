import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-bottom: 1px solid #c5c5c5;
  padding: 1.25rem 0;
  border-top: ${props => props.active ? "solid 1px #c5c5c5" : "none"};
`;

const CardBody = styled.div`
  // margin: 0 2em;
`;

const Title = styled.h4`
  font-weight: 500;
  margin-bottom: 0;
  // line-height: 1.2;

`;

const Subtitle = styled.h5`
  font-weight: 400;
  margin: 0;
`;

export default function Card(props) {
  function renderCard() {
    return (
      <CardBody>
        <Title>{props.object.facilityName}</Title>
        {
          props.category === "dialysis" ?
          <>
            <Subtitle>{props.object.phoneNumber}</Subtitle>
            <Subtitle>{props.object.addressLine1 + " | " + props.object.City}</Subtitle>
          </> :
          <>
            <Subtitle>{props.object.phone}</Subtitle>
            <Subtitle>{props.object.addressLine1}</Subtitle>
            {/* <Subtitle>{props.object.addressLine1 + " | " + props.object.addressLine2}</Subtitle> */}
          </>
        }
      </CardBody>
    )
  }
  return (
    <>
      {/* {
        props.index === 0 ?
        <Container active>
          {renderCard()}
        </Container> :
        <Container>
          {renderCard()}
        </Container>
      } */}
      <Container>
        {renderCard()}
      </Container>
    </>
  )
}