import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  padding: 5rem 0;
  background-color: #f5f5f5;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 18pt;
  text-align: center;
  line-height: 1.5;
  // margin: 0;
`;



const Address = styled.p`
  font-weight: 300;
  font-size: 18pt;
  text-align: center;
  line-height: 1.5;
  margin: 0;
`;

class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Text>Questions or comments? Give us a shout. </Text>
        <Address>
          <a href="https://sodo.surge.sh" style={{color: "#484848", textDecoration: "none"}}>heyjerry@justsendit.com</a>
        </Address>
      </Container>
    )
  }
}

export default Contact;