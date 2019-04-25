import React, { useState, useEffect } from "react"
import styled from "styled-components"

import {kingAlerts} from "../../components/datascrape/alerts"
import ListingCard from "../../components/kingCoListing" 
import Header from '../../components/header'
import SEO from '../../components/seo'

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

export default function KingAlerts() {
  const [dict, setDict] = useState([]);
  const [active, setActive] = useState(false);
  const [activeListing, setActiveListing] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await kingAlerts();
      setDict(data);
    }
    fetchData();
  }, [])

  function createList() {
    const array = dict;
    return array.map(object => {
      return (
        <li 
          key={object.name} 
          onClick={() => {
            setActive(true);
            setActiveListing(object);
          }}
        >
          <Card>
            <CardBody>
              <CardText>{object.name}</CardText>
              <CardMicroText>{object.info.date}</CardMicroText>
            </CardBody>
            <i className="material-icons" style={{fontSize: "30px", color: "#484848"}}>chevron_right</i>
          </Card>
        </li>
      )
    })
  }

  function renderList() {
    if (dict.length > 0) {
      var tempDate = new Date();
      var date = tempDate.getFullYear() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getDate() + ', '+ tempDate.getHours()+':'+ tempDate.getMinutes();
      const currDate = "Last updated on: "+ date;
      return (
        <List>
          <ListTitle>{currDate}</ListTitle>
          {createList()}
        </List>
      );
    } else {
      return <h4>Loading...</h4>
    }
  }   

  return (
    <>
      <SEO title="King County" />
      <Header />
      <Container>
        <TitleBox>
          <Title>King County</Title>
          <Subtitle>Road closures and restrictions in unincorporated King County</Subtitle>
          { 
            active ?
            <ListingCard 
              onClose={() => {
                setActive(false);
              }}
              activeListing={activeListing}
            /> 
            : renderList()
          }
        </TitleBox>
      </Container>
    </>
  )
}
