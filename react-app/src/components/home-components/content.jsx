import React from 'react';
import styled from 'styled-components';

import JoseRizal from '../../images/jose-rizal.jpg';
import Viaduct from '../../images/viaduct.jpg'
import ContactGrid from './contactGrid';
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
  max-width: 50em;
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

const ContactSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 2.2rem;


`;

function Content() {
  return (
    <Background>

      <Container>
    
        <Box>
          <br/>
          <br/>
          <Header>RARET Workgroup</Header>
          <p> The Regional Alliance for Resilient and Equitable Transportation (RARET) workgroup works to increase the life-sustaining transportation services available to seniors, people with disabilities,
            low-income individuals, and other vulnerable populations in the event of a major emergency such as a natural or man-made disaster, severe weather event, or terrorist incident. It will increase the
            preparedness and ability of special needs transportation providers to assist in the evacuation of special needs populations, transportation to emergency shelters, and/or maintaining access to
            life-sustaining medical services and other necessary trips.</p>
          <p> The ultimate goal of the project is to expand the network of special needs vehicles and resources available to the community to supplement the transit systems and to alleviate pressure on our
            emergency response fleet.</p>
        
          <br/><br/>
          <hr width="50%" align="center" padding-right="1rem"></hr><br/><br/> <br/><p> If you are interested in joining the workgroup or attending a meeting, please contact:</p>
        
          <ContactSection>
            
            <ContactGrid />
          </ContactSection>

      
        </Box>
      </Container>
    </Background>
  )
}

export default Content;