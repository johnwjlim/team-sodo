import React from "react"
import styled from "styled-components"



const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0.5rem 1.25rem;
`;

const Memes = styled.div`
  position: relative;
  top: 30vh;  
`;
const SubText = styled.h3`
  font-weight: 400;
  margin: 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  min-height: 800px;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  position: fixed;
  padding-top: 0;
`;


export default class Preparedness extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
     <p>dsfsd</p>
    )
  }
}
export default Preparedness;