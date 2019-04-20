import React from "react"
import styled from "styled-components"
import {kingAlerts} from "../../components/datascrape/alerts"
import ListingCard from "../../components/kingCoListing" 
import Header from '../../components/header'

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
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.1em;
`;
const Subtitle = styled.h3`
  font-weight: 400;
  margin: 0;
`;

const TitleBox = styled.div`
  margin: 1em 0;
  margin-bottom: 1.5em;
`;

const Card = styled.div`
  margin: 0 1.5em;
  border-bottom: 1px solid #dddddd;
  cursor: pointer;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const CardBody = styled.div`
  padding: 0.5em 0;
`;

const CardText = styled.h3`
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.2em;
`;

const CardMicroText = styled.h4`
  color: #767676;
  font-weight: 400;
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 1.5em 1em;
  border-radius: 8px;
  // border: 1px solid #dddddd;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  background-color: white;
`;

const ListTitle = styled.h4`
  color: #767676;
  font-weight: 400;
  margin: 0 1.5em;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 0.75em;
`;

class KingAlerts extends React.Component {
  constructor() {
    super();
    this.state = {
      dict: null,
      active: false,
    };
  }
  
  async componentWillMount() {
    const dictionary = await kingAlerts();
    this.setState({dict: dictionary});
  }

  renderList() {
    if (this.state.dict !== null) {
      const list = this.state.dict;
      var tempDate = new Date();
      var date = tempDate.getFullYear() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getDate() + ', '+ tempDate.getHours()+':'+ tempDate.getMinutes();
      const currDate = "Last updated on: "+ date;
      return (
        <List>
        <ListTitle>{currDate}</ListTitle>
          {list.map(object => {
            return (
              <li key={object.name} onClick={() => {
                this.setState({activeListing: object, active: true})
              }}>
                <Card>
                  <CardBody>
                    <CardText>{object.name}</CardText>
                    <CardMicroText>{object.info.date}</CardMicroText>
                  </CardBody>
                {/* <FontAwesomeIcon icon="angle-right" size="2x"/> */}
                <i className="material-icons" style={{fontSize: "30px", color: "#484848"}}>chevron_right</i>
                </Card>
              </li>
            )
          })}
        </List>
      )
    } else {
      return (
        <h4>Loading...</h4>
      )
    }
  }


  render() {
    return (
      <>
        <Header/>
        <Container>
          <TitleBox>
            <Title>King County</Title>
            <Subtitle>Road closures and restrictions within unincorporated King County</Subtitle>
          </TitleBox>
          { 
            this.state.active ?
            <ListingCard 
              onClose={() => this.setState({active: false})}
              activeListing={this.state.activeListing}
            /> : this.renderList()
          }
        </Container>
      </>
    )
  }

}

export default KingAlerts;
