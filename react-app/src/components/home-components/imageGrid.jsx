import React from 'react';
import styled from 'styled-components';

import Robin from '../../images/team/robin.jpg'
import Christian from '../../images/team/christian.jpg'
import John from '../../images/team/john.jpg'
import Kelsie from '../../images/team/kelsie.jpg'

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 3em auto;
`;

const Card = styled.div`
  position: relative;
  flex: 1;
  padding: 0.25rem;
`;

const CardHeader = styled.h4`
  font-weight: 600;
  margin: 0;
`;

const CardSub = styled.h4`
  font-weight: 400;;
`;

const Body = styled.div`
  margin: 0.25rem 0;  
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0.25em 0;
  border-radius: 8px;
`;

export default function imageGrid() {
  return (
    <Grid>
      <Card>
        <Image src={Robin} />
        <Body>
          <CardHeader>Robin Yang</CardHeader>
          <CardSub>Product Manager</CardSub>
        </Body>
      </Card>
      <Card>
        <Image src={Christian} />
        <Body>
          <CardHeader>Christian Hahn</CardHeader>
          <CardSub>Full Stack Dev</CardSub>
        </Body>
      </Card>
      <Card>
        <Image src={John} />
        <Body>
          <CardHeader>John Lim</CardHeader>
          <CardSub>Product Design</CardSub>
        </Body>
      </Card>
      <Card>
        <Image src={Kelsie} />
        <Body>
          <CardHeader>Kelsie Johnson</CardHeader>
          <CardSub>Back End Dev</CardSub>
        </Body>
      </Card>
    </Grid>
  )
}