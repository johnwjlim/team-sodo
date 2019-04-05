import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/home-header"

import RoadAlertDesc from "../components/descriptions/roadalertdesc"
import ResourcesDesc from "../components/descriptions/resourcedesc"
import AboutDesc from "../components/descriptions/aboutdesc"

const Container = styled.div`
  position: relative;
  z-index: 20;  
  margin: 0 auto;
`;

const Image = styled(Img)`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

const Background = styled.div`
  background-color: #EDFF00;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: fixed
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  position: absolute;
  top: 35vh;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  z-index: 20;
  border-top: solid 1px #333333;
  border-bottom: solid 1px #333333;
  padding: 2em 0;
`;

const StyledLink= styled(Link)`
  font-family: neue-haas-unica;
  text-decoration: none;
  color: #333333;
  display: block;
  padding: 0.65rem 0;
  font-weight: 500;
  font-size: 42px;

  &:hover {
    color: white;
  }
`;

const Desc = styled.h1`
  font-family: neue-haas-unica;
  margin-left: 2rem;
  line-height: 1.5;
  color: white;
  font-size: 42px;
  font-weight: 500;
  max-width: 34em;
`;

const DefaultDesc = styled(Desc)`
  color: #333333;
`;

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {display: 0}
  }

  changeColor(index) {
    this.setState({display: index})
  }

  renderDescription(index) {
    switch(index) {
      case 1: 
        return <RoadAlertDesc />;
      case 2:
        return <ResourcesDesc />;
      case 3:
        return <AboutDesc />;
      default: 
        // return <DefaultDesc>Regional <br/> Alliance for <br/> Resilient and <br/> Equitable <br/> Transportation.</DefaultDesc>;
        return <></>;
    }
  }

  renderBackground(index) {
    switch(index) {
      case 1:
        return <Image fluid={this.props.data.roadAlerts.childImageSharp.fluid} style={{position: "fixed"}}/>;
      case 2: 
        return <Image fluid={this.props.data.resources.childImageSharp.fluid} style={{position: "fixed"}} />;
      case 3:
        return <Image fluid={this.props.data.about.childImageSharp.fluid} style={{position: "fixed"}} />;
      default:
        return <Background/>;
    }
  }

  render() {
    return (
      <Layout>
        <SEO title={"Home"}/>
        {this.renderBackground(this.state.display)}
        <Container>
          <Header display={this.state.display}></Header>
            <Content>
            {/* <Header display={this.state.display}></Header> */}
              <Row>
                <h1>
                  <StyledLink onMouseLeave={()=> this.changeColor(0)} onMouseEnter={()=>this.changeColor(1)} to="/home">Road Alerts</StyledLink>
                  <StyledLink onMouseLeave={()=> this.changeColor(0)} onMouseEnter={()=>this.changeColor(2)} to="/home">Resources</StyledLink>
                  <StyledLink onMouseLeave={()=> this.changeColor(0)} onMouseEnter={()=>this.changeColor(3)} to="/home">About</StyledLink>
                </h1>
                {this.renderDescription(this.state.display)}
              </Row>
            </Content>
        </Container>
      </Layout>

    )
  }
}

export default HomePage;

export const query = graphql`
  {
    roadAlerts:file(relativePath: {eq: "images/home-v2/road-alerts-img.png"}) {
      childImageSharp {
        fluid (maxWidth:2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    resources:file(relativePath: {eq: "images/home-v2/resources-img.png"}) {
      childImageSharp {
        fluid (maxWidth:2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    about:file(relativePath: {eq: "images/home-v2/about-img.png"}) {
      childImageSharp {
        fluid (maxWidth:2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;