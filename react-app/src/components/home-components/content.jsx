import React from 'react';
import styled from 'styled-components';

import JoseRizal from '../../images/jose-rizal.jpg';
import Viaduct from '../../images/viaduct.jpg'

import ImageGrid from './imageGrid';

const Background = styled.div`
  position: relative;
  padding: 1.25em;
  background-color: #fafafa;
  top: 68vh;
  z-index: 10;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Box = styled.div`
  max-width: 40em;
  margin: 2em auto;
`;

const Dash = styled.div`
  padding-top: 1em;
  border-bottom: solid 0.5px #767676;
  max-width: 1032px;
  margin: 0 auto;
`;

const Header = styled.h3`
  margin: 2em auto;
  font-weight: 600;
`;

const ImageWrapper = styled.div`
  padding: 1em 0;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0.25em 0;
  border-radius: 4px;
`;

function Content() {
  return (
    <Background>
      <Container>
        <Box>
          <p>The Regional Alliance for Resilient and Equitable Transportation is a coalition of non-profit and government agencies from King, Snohomish and Pierce counties.  RARET works with special needs transportation providers (think paratransit vehicles) to find ways to supplement the system in event of a major emergency, such as an earthquake, fire, or flooding</p>
          <Header>What we're building</Header>
          <p>We're creating and piloting a central repository of road conditions to provide a one-stop-shop of transportation conditions and situational awareness in the central Puget Sound region.</p>
          <ImageWrapper>
            <Image src={JoseRizal}></Image>
            <Image src={Viaduct} />
          </ImageWrapper>
          <Header>The Team</Header>
          <p>We're a diverse group of problem solvers that each bring our own unique skillsets and perspectives to the table.</p>
          <ImageGrid />
        </Box>
      </Container>
    </Background>
  )
}

export default Content;