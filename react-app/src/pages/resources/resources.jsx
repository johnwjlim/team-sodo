import React from "react"
import styled from "styled-components"
import { Link } from '@reach/router';
import Header from '../../components/header'
import SEO from '../../components/seo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight)

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  padding: 0.5rem 1.25rem;
`;

const Title = styled.h1`
  margin: 1em 0;
  margin-bottom: 1.5em;
  font-weight: 600;
`;
const Line = styled.div`
  border-bottom: solid 1.5px #000000;
`;
const Card = styled.div`
  border: 1px solid #dddddd;
  border-radius: 8px;
  margin: 1em 0;
  width: 1000px;
`;

const CardBody = styled.div`
  padding: 2em 1.5em;
  display: flex;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  margin: 0;
`;


const ButtonLink = styled(Link)`
  color: black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333333;
`;


class Resources extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <>
      <SEO title="Resources"/>
      <Header/>
      <Container>
        <Title>Select a Resource</Title>
        <StyledLink to='/dialysis'>
          <Card>
            <CardBody>
              <CardTitle>Dialysis Centers</CardTitle>
              <FontAwesomeIcon icon="angle-right" size="2x" aria-label="click"/>
            </CardBody>
          </Card>
        </StyledLink>
        <StyledLink to='/cancer'>
          <Card>
            <CardBody>
              <CardTitle>Cancer Centers</CardTitle>
              <FontAwesomeIcon icon="angle-right" size="2x" aria-label="click"/>
            </CardBody>
          </Card>
        </StyledLink>
        <StyledLink to='/em-contacts'>
          <Card>
            <CardBody>
              <CardTitle>Emergency Manager Contacts</CardTitle>
              <FontAwesomeIcon icon="angle-right" size="2x" aria-label="click"/>
            </CardBody>
          </Card>
        </StyledLink>
        <StyledLink to='/prepare'>
          <Card>
            <CardBody>
              <CardTitle>Preparation</CardTitle>
              <FontAwesomeIcon icon="angle-right" size="2x" aria-label="click"/>
            </CardBody>
          </Card>
        </StyledLink>
          </Container>
    </>
  }
}

export default Resources;