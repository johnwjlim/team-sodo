import React from 'react';
import styled from 'styled-components'


const Header = styled.h2`
  margin: 0;
  font-size: 28px;
`;

const Date = styled.h4`
  font-weight: 400;
  margin: 0;
`;

function Title() {
  return (
    <>
      <Date>May 3rd, 2019</Date>
      <Header>Road Alerts</Header>
    </>
  )
}
export default Title;