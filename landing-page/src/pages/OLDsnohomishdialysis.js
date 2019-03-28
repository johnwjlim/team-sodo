import React from 'react';
import Papa from 'papaparse';
import { Link } from "gatsby";
import styled from "styled-components"
import { Card, Navbar, Nav, Button } from 'react-bootstrap';

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

class snohomishdialysis extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      snohomish: false,
      king: false,
      pierce: false
    };

    this.getData = this.getData.bind(this);
    this.handleSnohoClick = this.handleSnohoClick.bind(this);
  }

  handleSnohoClick() {
    this.setState({
      snohomish: true
    });
    console.log(this.state.snohomish);
  }

  componentWillMount() {
    this.getCsvData();
  }

  fetchCsv() {
    return fetch('https://cors.io/?https://raw.githubusercontent.com/kelsiej/csv/master/dialysis.csv').then(function (response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder('utf-8');

      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  }

  getData(result) {
    this.setState({ data: result.data });
  }

  async getCsvData() {
    let csvData = await this.fetchCsv();

    Papa.parse(csvData, {
      complete: this.getData
    });
  }

  render() {
    let dictArray = []
    let kingArray = []
    let pierceArray = []
    let snohomishArray = []
    for (let i = 1; i < this.state.data.length - 1; i++) {
      let blah = {
        providerNumber: this.state.data[i][0], Network: this.state.data[i][1], facilityName: this.state.data[i][2],
        addressLine1: this.state.data[i][3], addressLine2: this.state.data[i][4], City: this.state.data[i][5],
        State: this.state.data[i][6], Zip: this.state.data[i][7], County: this.state.data[i][8], phoneNumber: this.state.data[i][9],
        profitOrNonProfit: this.state.data[i][10], chainOwned: this.state.data[i][11], chainOrganization: this.state.data[i][12],
        lateShift: this.state.data[i][13], numberOfDialysisStations: this.state.data[i][14], offersInCenterHemodialysis: this.state.data[i][15],
        offersInCenterPeritonealDialysis: this.state.data[i][16], offersHomeHemodialysisTraining: this.state.data[i][7], Location: this.state.data[i][18]
      };
      if(blah.County == 'KING'){
        kingArray.push(blah)
      }
      if(blah.County == 'SNOHOMISH'){
        snohomishArray.push(blah)
      }
      if(blah.County == 'PIERCE'){
        pierceArray.push(blah)
      }
      dictArray.push(blah);
    }

    return (
      <div>
        <Container>
          <div>
            <Header><Link to="/" style={{ textDecoration: "none" }} className="link">RARET</Link></Header>
            <Content>

              <Line />
              <Navbar style={{ minHeight: '60px' }} bg="light" variant="light">
                <Nav className="tabs">
                  <Nav.Link><Link to="/" className="link" style={{ textDecoration: "none" }}>Home</Link></Nav.Link>
                  <Nav.Link >Resources</Nav.Link>
                  <Nav.Link style={{ color: 'black' }}>Road Conditions</Nav.Link>
                </Nav>
              </Navbar>
              <Header2>Dialysis Clinics</Header2>
              <Button onClick={this.handleSnohoClick} variant="dark">Go Back</Button>
            </Content>
          </div>
          
          <div>
            <Content>
              {dictArray.map(function (object, i) {
                return <div className={"row"} key={i}>
                  <Card>
                    {[<Card.Body><Card.Title>{object.facilityName} </Card.Title>
                      <Card.Text className="fosfo" key={i}> Phone Number: {object.phoneNumber} <br></br>  Address: {object.addressLine1}</Card.Text>
                    </Card.Body>,
                    ]}
                  </Card>
                </div>;
              })}

            </Content>
          </div>
        </Container>
      </div>
    );
  }
}

export default snohomishdialysis;