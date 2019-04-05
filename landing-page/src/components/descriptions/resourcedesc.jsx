import React from "react"
import styled from "styled-components"

const Desc = styled.h1`
  font-family: neue-haas-unica;
  // flex: 1 1 auto;
  margin-left: 2rem;
  line-height: 1.5;
  color: white;
  font-size: 36px;
  font-weight: 500;
  max-width: 635px;
`;

export default class ResourceDesc extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <Desc>List of available resources in the Central Puget Sound Region</Desc>
    )
  }
}