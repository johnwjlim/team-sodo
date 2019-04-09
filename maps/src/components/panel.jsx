import React from 'react';
import styled from 'styled-components'


const Header = styled.h3`
 font-weight: 600;
`;

class Panel extends React.Component {
  constructor() {
    super();
  }

  render() {
    const viewport  = this.props.viewport;

    return (
      <Header>Test header</Header>
    )
  }
}

export default Panel;