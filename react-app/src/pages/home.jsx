import React from "react"
import styled from "styled-components"
import Header from "../components/header";
import SEO from '../components/seo'

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

const Title = styled.h1`
  font-weight: 600;
  margin: 0.3em 0;
  color: #484848;
`;

const SubText = styled.h3`
  font-weight: 400;
  margin: 0;
`;

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <SEO title="Home" />
        <Header/>
        <Container>
          <Memes>
            <Title>Awww shoot... we haven't actually built the home page yet</Title>
            <SubText>Fret not! We'll get to it. Eventually. I hope.</SubText>
          </Memes>
        </Container>
      </>
    )
  }
}