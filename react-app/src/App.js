import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { Router } from '@reach/router'

import RoadAlerts from './pages/roadAlerts/roadAlerts'
import KingAlerts from './pages/roadAlerts/kingAlerts'
import SnohoAlerts from './pages/roadAlerts/snohoAlerts'
import Resources from './pages/resources/resources'
import Cancer from './pages/resources/cancer'
import Dialysis from './pages/resources/dialysis-test'
import EMContacts from './pages/resources/em-contacts'
import Home from './pages/home'
import Example from './pages/example'
import Transitions from './pages/roadAlerts/transitions'
import Test from './pages/roadAlerts/test'
import Prepare from './pages/resources/prepare'

const Container = styled.div`
  background-color: #ffffff;
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
          <Test path="/test" />
          <Prepare path="/prepare"/>
        </Router>
      </Container>
    );
  }
}

export default App;
