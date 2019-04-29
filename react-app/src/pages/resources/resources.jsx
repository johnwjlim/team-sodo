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
  padding: 1em 1.25em;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  margin: 0;
`;


const ButtonLink = styled(Link)`
  color: black;
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
              <Card>
                <CardBody>
                <CardTitle>Dialysis Centers</CardTitle>
                <ButtonLink to="/dialysis"><FontAwesomeIcon icon="angle-right" size="2x" transform="right-450 up-8" /></ButtonLink>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <CardTitle>Cancer Centers</CardTitle>
                <ButtonLink to="/cancer"><FontAwesomeIcon icon="angle-right" size="2x" transform="right-450 up-8" /></ButtonLink>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                <CardTitle>Emergency Manager Contacts</CardTitle>
                <ButtonLink to="/em-contacts"><FontAwesomeIcon icon="angle-right" size="2x" transform="right-450 up-8" /></ButtonLink>
                </CardBody>
              </Card>
              {/* <Card>
                <CardBody>
                <CardTitle>Pierce County</CardTitle>
                <CardText>
                  4 alerts
                </CardText>
                <Button variant="dark">Select</Button>
                </CardBody>
              </Card> */}
          </Container>
    </>
  }
}

export default Resources;