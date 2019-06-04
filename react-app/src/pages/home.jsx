import React from "react"
import styled from "styled-components"
import Header from "../components/resources/test-header"
// import Header from "../components/header"
import SEO from '../components/seo'

import Hero from "../images/hero.jpg"

import Title from "../components/home-components/title";
import Content from "../components/home-components/content"

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
  min-height: 600px;
  object-fit: cover;
  background-size: cover;
`;

const ImageWrapper = styled.div`
  position: fixed;
  padding-top: 0;
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
        <ImageWrapper>
         <Image src={Hero} alt="hero image - Seattle view" />
        </ImageWrapper>
        <Title />
        <Content/>
      </>
    )
  }
}