import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import logo from "../images/iSchoolPrimary_RGB_Purple.svg"

const Container = styled.div`
  // padding: 2.5rem 0;
  padding-top: 0;
`;

const Statement = styled.p`
  max-width: 800px;
  margin: 2.5rem auto;
  font-weight: 300;
  font-size: 17pt;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14pt;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2.5rem 0;
`;

const ImageWrapper = styled.a`
  display: block;
  margin: 2.5rem 0;
`;

class Sponsors extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <h6 style={{textAlign: "center", color: "#767676", margin: "0"}}>IN COLLABORATION WITH</h6>
        <Grid>
          {/* <ImageWrapper href="https://ischool.uw.edu">
            <Img fixed={this.props.ischool.childImageSharp.fixed}></Img>
          </ImageWrapper> */}
          <ImageWrapper href="https://ischool.uw.edu" target="_blank" rel="noopener">
            <img src={logo} style={{width: "100%", height: "auto"}}/>
          </ImageWrapper>
          <ImageWrapper href="https://hopelink.org" target="_blank" rel="noopener">
            <Img fixed={this.props.hopelink.childImageSharp.fixed}></Img>
          </ImageWrapper>
          
        </Grid>
      </Container>
    )
  }
}

export default Sponsors;