import React from 'react'
import styled from 'styled-components'

import Closed from '../icons/road-sign-no-entry.svg'
import Restricted from '../icons/road-sign-warning.svg'

const Container = styled.div`
  border-bottom: 1px solid #c5c5c5;
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

const CardBody = styled.div`
  margin: 0 2em;
`;

const MicroText = styled.h5`
  font-weight: 400;
  margin: 0;
  color: #767676;
`;

const Title = styled.h4`
  font-weight: 500;
  margin-bottom: 0.1rem;
  line-height: 1.2;
`;


export default function Card(props) {
  return (
    <Container>
      {
        props.object.type === 1 ?
        <img src={Closed} width={20} height={20} /> :
        <img src={Restricted} width={20} height={20} />
      }
      <CardBody>
        <MicroText>{props.object.city}</MicroText>
        <Title>{props.object.title}</Title>
        <MicroText>{props.object.date}</MicroText>
      </CardBody>
    </Container>
  )
}