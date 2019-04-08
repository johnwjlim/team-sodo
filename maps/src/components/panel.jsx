import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  margin: 1.15em;
  height: 80vh;
  width: 25em;
  top: 5vh;
  bottom: 5vh;
  z-index: 30;
  background-color: white;
`;

class Panel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>

      </Container>
    )
  }
}

export default Panel;