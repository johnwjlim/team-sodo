import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { Router } from '@reach/router'

import RoadAlerts from './pages/roadAlerts/roadAlerts'
import KingAlerts from './pages/roadAlerts/kingAlerts'
import SnohoAlerts from './pages/roadAlerts/snohoAlerts'
import Resources from './pages/resources/resources'
import Cancer from './pages/resources/cancer'
import Dialysis from './pages/resources/dialysis'
import EMContacts from './pages/resources/em-contacts'
import Home from './pages/home'
import Example from './pages/example'
import Transitions from './pages/roadAlerts/transitions'

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
          <KingAlerts path="/roadalerts/kingalerts" />
          <SnohoAlerts path="/roadalerts/snohomishalerts" />
          <Resources path= "/resources"/>
          <Cancer path="/cancer"/>
          <Dialysis path="/dialysis"/>
          <EMContacts path="/em-contacts"/>
          <Example path="/example" />
          <Transitions path="/transitions"/>
        </Router>
      </Container>
    );
  }
}

export default App;
