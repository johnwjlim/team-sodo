import React from 'react';
import styled from 'styled-components'


const Header = styled.h2`
  margin: 0;
  font-size: 26px;
`;

const Subtitle = styled.h4`
  margin: 0;
  font-weight: 400;
`;

function Title() {
  return (
    <>
      <Header>Resources</Header>
      <Subtitle>Select a category</Subtitle>
    </>
  )
}
export default Title;