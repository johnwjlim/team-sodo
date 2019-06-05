import React from 'react';
import Papa from 'papaparse';
import styled from "styled-components"
import { Card, Navbar, Nav, Button } from 'react-bootstrap';
import Spinner from 'react-spinner-material';
import Header from '../../components/header'
import SEO from '../../components/seo'

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

const Header1 = styled.h1`
  padding-top: 1rem;
`;
const Line = styled.div`
  border-bottom: solid 1.5px #000000;
`;

const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
min-height: 70vh;

`;

const proxyurl = "https://cors-anywhere.herokuapp.com/"
const cancerSource = proxyurl + 'https://raw.githubusercontent.com/johnwjlim/team-sodo/master/react-app/src/components/resources/csv/Cancer-Treatment-Facility-Spreadsheet-inprogress.csv'

class Cancer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            spinnerOn: true
        };
        this.getData = this.getData.bind(this);

    }




    componentWillMount() {
        this.getCsvData();
    }

    fetchCsv() {
        // return fetch('https://cors.io/?http://raw.githubusercontent.com/kelsiej/csv/master/Cancer-Treatment-Facility-Spreadsheet-inprogress.csv').then(function (response) {
        return fetch(cancerSource).then(function (response) {
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

        this.setState({
            spinnerOn: false
        });

    }



    render() {
        let cancerFacilities = this.state.data;
        return (
            <div>
                <SEO title="Cancer Facilities" />
                <Header/>
                <Container>
                    <div>

                        <Content>
                            <Header1> Cancer Treatment Clinics</Header1>
                        </Content>
                    </div>
                    <div>
                        <Content>
                            {cancerFacilities.map(function (object, i) {
                                return <div className={"row"} key={i}>
                                    <Card>
                                        {[<Card.Body><Card.Title>{object[0]} </Card.Title>
                                        <Card.Text className="fosfo" key={i}> {object[1]} <br></br>  {object[2]}
                                                <br></br>  {object[3]}</Card.Text>
                                        </Card.Body>,
                                        ]}
                                    </Card>
                                </div>;
                            })}

                            <Center>
                                <Spinner size={75} spinnerColor={"#7fffd4"} spinnerWidth={2} visible={this.state.spinnerOn} />
                                </Center>
                        </Content>
                    </div>
                </Container>
            </div>
        );
    }
}
export default Cancer;