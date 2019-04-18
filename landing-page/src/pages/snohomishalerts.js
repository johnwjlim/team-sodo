import React from "react"
import styled from "styled-components"
import {Card, Navbar, Nav} from 'react-bootstrap';
import {Link} from "gatsby";
import {snohomishAlerts, kingAlerts} from "../components/Robin Datascrape Files/alerts"

const Container = styled.div`
  position: relative;
  z-index: 20;
  // padding: 1.25rem 0;
  padding: 0.5rem 0;
  padding-bottom: 0;
  background: #ffffff;
  justifyContent: 'space-between'
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

const Header2 = styled.h1`
  padding-top: 1rem;
`;
const Line = styled.div`
  border-bottom: solid 1.5px #000000;
`;

const Span = styled.span`
  padding-left: 120px;
  padding-right: 120px;
`;

let snohoDict = snohomishAlerts;
let kingDict = kingAlerts;

console.log(snohoDict)

class SnohomishAlerts extends React.Component{
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
                    <Nav.Link >Resources</Nav.Link>
                    <Nav.Link style={{color: 'black'}}>Road Conditions</Nav.Link>
                  </Nav>
                </Navbar>
                <Header2>Snohomish County Road Conditions</Header2>
                <Card>
                  <Card.Body>
                  <Card.Title>164th St SE — from SR9 to Broadway Avenue — Snohomish</Card.Title>
                  <Card.Text>
                  Closed: Mar 7, 2019   8:15am	<Span>Opened: Mar 7, 2019   9:45am	</Span>	Problem: Snow and ice
                  </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                  <Card.Title>240th St SE — from Snohomish Woodinville Rd to 75th Ave SE — Woodinville</Card.Title>
                  <Card.Text>
                  Closed: Mar 8, 2019   4:15pm	<Span>Opened: Mar 10, 2019   9:15pm</Span> Problem: Construction/Maintenance
                  </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                  <Card.Title>3rd Ave NE — from 172nd St NE to 176th St NE — Lakewood</Card.Title>
                  <Card.Text>
                  Closed: Mar 8, 2019   3:30pm <Span>Opened: Mar 9, 2019 3:30pm	</Span> Problem: Accident
                  </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                  <Card.Title>43rd Ave SE — from 18700 43rd Ave SE to 18700 43rd Ave SE — Bothell</Card.Title>
                  <Card.Text>
                  Closed: Jul 11, 2016   10:00am <Span></Span>	 	Problem: LONG-TERM CLOSURE
                  </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                  <Card.Title>99th Ave NE — from 42nd St NE to 54th Pl NE — Lake Stevens</Card.Title>
                  <Card.Text>
                  Closed: Mar 5, 2019   5:45am	<Span>Opened: Mar 5, 2019 9:00am</Span> Problem: Other
                  </Card.Text>
                  </Card.Body>
                </Card>
              </Content>
            </Container>
              </div>
       }
 }

 export default SnohomishAlerts;