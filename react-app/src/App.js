import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import { Router } from '@reach/router'

import Header from './components/header'
import RoadAlerts from './pages/roadAlerts/roadAlerts'
import KingAlerts from './pages/roadAlerts/kingAlerts'
import SnohoAlerts from './pages/roadAlerts/snohoAlerts'
import Resources from './pages/resources/resources'
import Cancer from './pages/resources/cancer'
import Dialysis from './pages/resources/dialysis'
import EMContacts from './pages/resources/em-contacts'
import Home from './pages/home'

const Container = styled.div`
  background-color: #fdfdfd;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Home path="/"/>
          <RoadAlerts path="/roadalerts"/>
          <KingAlerts path="/kingalerts" />
          <SnohoAlerts path="/snohomishalerts" />
          <Resources path= "/resources"/>
          <Cancer path="/cancer"/>
          <Dialysis path="/dialysis"/>
          <EMContacts path="/em-contacts"/>
        </Router>
      </Container>
    );
  }
}

export default App;
