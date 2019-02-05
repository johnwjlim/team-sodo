import React from "react"
import styled from "styled-components"

const Grid = styled.div`
  column-count: 4;
`;

const Card = styled.div`
  margin: 1.25rem auto;
`;

class Team extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h6 style={{textAlign: "center", color: "#767676"}}>THE TEAM</h6>
        <Grid>

        </Grid>
      </>
    )
  }
}

export default Team;