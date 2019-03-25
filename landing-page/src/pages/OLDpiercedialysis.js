import React from "react"
import styled from "styled-components"
import {Card, Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from "gatsby";

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

const Header2 = styled.h2`
  padding-top: 1rem;
`;
const Line = styled.div`
  border-bottom: solid 1.5px #000000;
`;

const Span = styled.span`
  padding-left: 120px;
  padding-right: 120px;
`;


class PierceDialysis extends React.Component{
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
                  <Header2>Snohomish County Dialysis Clinics</Header2>
                  <Card>
                    <Card.Body>
                    <Card.Title>RAINIER VIEW DIALYSIS CENTER</Card.Title>
                    <Card.Text>
                    Address: 1822 112TH ST East Suite A, Tacoma
                    <br></br>
                    Phone: (425) 226-2408
                    </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                    <Card.Title>PARKLAND DIALYSIS CENTER</Card.Title>
                    <Card.Text>
                    Address: 311 140TH ST S, Tacoma
                    <br></br>
                    Phone: (206) 720-8839
                    </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                    <Card.Title>702 South Hill Park DR</Card.Title>
                    <Card.Text>
                    Address: 1474 112TH AVE NE, Suite 100, Puyallup
                    <br></br>
                    Phone: (425) 454-0067
                    </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                    <Card.Title>RENAL CARE GROUP NORTHWEST, INC.</Card.Title>
                    <Card.Text>
                    Address: 1415 E 72ND ST, Tacoma	
                    <br></br>
                    Phone: (253) 850-6810
                    </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                    <Card.Title>RENAL CARE GROUP NORTHWEST, INC.</Card.Title>
                    <Card.Text>
                    Address:5825 Tacoma Mall BLVD STE 103, Tacoma
                    <br></br>
                    Phone: (425) 821-8785
                    </Card.Text>
                    </Card.Body>
                  </Card>
                  <Button variant="dark"><Link to="/counties">Go Back</Link></Button>
                </Content>
              </Container>
                </div>
         }
   }
 export default PierceDialysis;