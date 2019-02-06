import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"


const Container = styled.div`
  padding: 2.5rem 0;
`;
const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  break-inside: avoid;
  position: relative;
  padding: 1.25rem;
`;

const ImageWrapper = styled.div`
  display: block;
`;

const TextCard = styled.div`
   margin: 1.25rem;
   text-align: center;
`;

const Title = styled.h3`
  font-size: 16pt;  
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const Statement = styled.p`
  // padding: 1.25rem 0;
  max-width: 800px;
  margin: 2.5rem auto;
  font-weight: 300;
  font-size: 16pt;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14pt;
    text-align: left;
  }
`;

const Detail = styled.p`
  font-weight: 300;
  font-size: 14pt;
`;

const Dash = styled.div`
  // padding-top: 0.25rem;
  border-bottom: solid 1.5px #dddddd;
`;



class Team extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <Dash />
        <Container>
          <h6 style={{textAlign: "center", color: "#767676"}}>THE TEAM</h6>
          <Statement>We are a diverse group of problem solvers that each bring our own unique skillsets and perspectives to the table.</Statement>
          <Grid>
            <Card>
              <ImageWrapper>
                <Img fixed={this.props.robin.childImageSharp.fixed}></Img>
                <TextCard>
                  <Title>Robin Yang</Title>
                  <Detail>Product Manager</Detail>
                </TextCard>
              </ImageWrapper>
            </Card>
            <Card>
              <ImageWrapper>
                <Img fixed={this.props.christian.childImageSharp.fixed}></Img>
                <TextCard>
                  <Title>Christian Hahn</Title>
                  <Detail>Full Stack Developer</Detail>
                </TextCard>
              </ImageWrapper>
            </Card>
            <Card>
              <ImageWrapper>
                <Img fixed={this.props.john.childImageSharp.fixed}></Img>
                <TextCard>
                  <Title>John Lim</Title>
                  <Detail>Product Designer</Detail>
                </TextCard>
              </ImageWrapper>
            </Card>
            <Card>
              <ImageWrapper>
                <Img fixed={this.props.robin.childImageSharp.fixed}></Img>
                <TextCard>
                  <Title>Kelsie Johnson</Title>
                  <Detail>Back End Developer</Detail>
                </TextCard>
              </ImageWrapper>
            </Card>
          </Grid>
        </Container>
      </>
    )
  }
}

export default Team;
