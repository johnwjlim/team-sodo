import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import { Router } from '@reach/router'

import Header from './components/header'
import RoadAlerts from './pages/roadAlerts'
import KingAlerts from './pages/kingAlerts'
import SnohoAlerts from './pages/snohoAlerts'

const Container = styled.div`
  background-color: #fdfdfd;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Router style={{padding: "0.5rem 1.25rem"}}>
          <RoadAlerts path="/roadalerts"/>
          <KingAlerts path="/kingalerts" />
          <SnohoAlerts path="/snohomishalerts" />
        </Router>
      </Container>
    );
  }
}

export default App;
