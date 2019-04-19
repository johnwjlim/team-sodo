import React from "react"
import styled from "styled-components"
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "gatsby";
import SnohomishData from "../components/Robin Datascrape Files/alerts"

const Container = styled.div`
  position: relative;
  z-index: 20;
  // padding: 1.25rem 0;
  padding: 0.5rem 0;
  padding-bottom: 0;
  background: #ffffff;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1.25rem;
  margin-top: 0;
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 48pt;
  padding-left: 150px;
  letter-spacing: 10px;
  @media (max-width: 768px) {
    font-size: 28pt;
  }
`;

const Header2 = styled.h2`
  padding-top: 1rem;
`;
const Line = styled.div`
  border-bottom: solid 1.5px #000000;
`;
const Card = styled.div`
  border: 1px solid #dddddd;
  border-radius: 8px;
  margin: 0;
`;

const CardBody = styled.div`
  padding: 1em 1.25em;
  // margin: 1em 0;
`;

const CardTitle = styled.h4``;

const CardText = styled.p``;

const Button = styled.button`
  background-color: #484848;
  color: white;
  text-decoration: none;
  padding: 0.35em 0.75em;
  border-radius: 4px;
`;

class RoadAlerts extends React.Component{
    constructor(props) {
      super(props);
    }
    render() {
       return <div>
          <Container>
            <Header><Link to="/" style={{textDecoration: "none"}} className="link">RARET</Link></Header>
              <Content>
                <Line/>
                <Navbar style={{minHeight: '60px'}} bg="light" variant="light">
                  <Nav className="tabs">
                    <Nav.Link><Link to="/" className="link" style={{textDecoration: "none"}}>Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/resources" className="link" style={{textDecoration: "none"}}>Resources</Link></Nav.Link>
                    <Nav.Link style={{color: 'black'}}>Road Conditions</Nav.Link>
                  </Nav>
                </Navbar>
                <Header2>Select a County</Header2>
                <Card>
                  <CardBody>
                  <CardTitle>King County</CardTitle>
                  <CardText>
                    4 alerts
                  </CardText>
                  <Button variant="dark"><Link to="/kingalerts" style={{textDecoration: "none"}}>Select</Link></Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                  <CardTitle>Snohomish County</CardTitle>
                  <CardText>
                    9 alerts
                  </CardText>
                  <Button variant="dark"><Link to="/snohomishalerts" style={{textDecoration: "none"}}>Select</Link></Button>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                  <CardTitle>Pierce County</CardTitle>
                  <CardText>
                    4 alerts
                  </CardText>
                  <Button variant="dark">Select</Button>
                  </CardBody>
                </Card>
              </Content>
            </Container>
            </div>
       }
 }

 export default RoadAlerts;