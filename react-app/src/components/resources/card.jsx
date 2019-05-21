import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-bottom: 1px solid #c5c5c5;
  padding: 1rem 0;
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
  return (
    <Container>
      <CardBody>
        <Title>{props.object.facilityName}</Title>
        <Subtitle>{props.object.phoneNumber}</Subtitle>
        <Subtitle>{props.object.addressLine1}</Subtitle>
      </CardBody>
    </Container>
  )
}