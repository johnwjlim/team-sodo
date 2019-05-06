import React, { Component, useState, useEffect } from 'react';
import './App.css';
import ReactMapGL, {Marker, GeolocateControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components'

import Title from './components/panel/title'
import Map from './components/map'
import Dummy from './data/dummy'

import Card from './components/panel/card'


const TOKEN = 'pk.eyJ1Ijoid2psaW0iLCJhIjoiY2plNGtpMXFpNmw3ZTMzcXA4a3l1NmdwOSJ9.2Ou7bageJ-DCfiASBrV5HA';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none'
};

const geolocateStyle = {
  position: 'absolute',
  bottom: 10,
  right: 0,
  padding: '10px'
};

const GeolocateStyle = styled.div`
  position: absolute;
  // bottom: 0;
  // right: 0;
  top: 0;
  left: 0;
  margin: 1.25em;
`;

const Panel = styled.div`
  position: relative;
  height: 100%;
  width: 23em;
  z-index: 1;
  background-color: white;
  padding: 2.5em 1.5em;
  flex-shrink: 0;
`;

const Container = styled.div`
  display: flex;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const SegmentedControl = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const ControlTitle = styled.h4`
  margin: 0;
  color: ${props => props.active ? "#333333" : "#767676" };
  font-weight: ${props => props.active? "500" : "400"};
  border-bottom: ${props => props.active ? "solid 1px #333333" : "none"};
`;


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       viewport: {
//         longitude: -122.3,
//         latitude: 47.6,
//         zoom: 12.44,
//         width: "100vw",
//         height: "100vh"
//       },
//       interactionState: {},
//       settings: {
//         dragPan: true,
//         dragRotate: true,
//         scrollZoom: true,
//         touchZoom: true,
//         touchRotate: true,
//         keyboard: true,
//         doubleClickZoom: true,
//         minZoom: 11,
//         maxZoom: 18,
//         minPitch: 0,
//         maxPitch: 85
//       }
//     }
//   };

//   _onViewportChange = viewport => this.setState({viewport})

//   render() {

//     const {viewport} = this.state;

//     return (
//       <div>
//         <ReactMapGL
//           mapboxApiAccessToken={TOKEN}
//           mapStyle="mapbox://styles/wjlim/cju7ha5756yds1fo9r7tz519u"
//           {...this.state.viewport}
//           {...this.state.settings}
//           onViewportChange={this._onViewportChange}
//         >
//           <GeolocateStyle>
//             <GeolocateControl
//             onViewportChange={this._onViewportChange}
//             positionptions={{enableHighAccuracy: true}}
//             trackUserLocation={true}
//             />
//           </GeolocateStyle>
//           <Panel>
//             <PanelContent/>
//           </Panel>
//           <Marker latitude={47.65} longitude={-122.30} offsetLeft={-20} offsetTop={-10}>
//             <svg style={{...pinStyle}}>
//               <path d={ICON}></path>
//             </svg>
//           </Marker>
//           <div style={geolocateStyle}>
//             <GeolocateControl
//             onViewportChange={this._onViewportChange}
//             positionptions={{enableHighAccuracy: true}}
//             trackUserLocation={true}
//             />
//           </div>
//         </ReactMapGL>
//       </div>
//     );
//   }
// }

function App() {
  const [master, setMaster] = useState(Dummy.alerts);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(Dummy.alerts);

  useEffect(() => {
    if (active > 0) {
      let array = master.filter(object => object.county === active);
      setVisible(array);
    } else {
      setVisible(master);
    }
  },[active])

  function compileList() {
    let array = visible;
    if (array) {
      return (
        array.map(object => {
          return (
            <li key={object.title}>
              <Card object={object} />
            </li>
          )
        })
      )
    } else {
      return (
        <h3>Loading...</h3>
      )
    }
  }

  function createControl() {
    let titles = ["All Counties", "King County", "Snohomish County"];
    return (
      titles.map(title => {
        let index = titles.indexOf(title);
        return (
          <StyledLink onClick={() => {
            setActive(index);
            }}>
            {
              active === index ?
              <ControlTitle active>{title}</ControlTitle> :
              <ControlTitle>{title}</ControlTitle>
            }
          </StyledLink>
        )
      })
    )
  }

  return (
    <Container>
      <Panel>
        <Title />
        <SegmentedControl>
          {createControl()}
        </SegmentedControl>
        <List>
          {compileList()}
        </List>
      </Panel>
      <Map />
    </Container>
  )
}

export default App;
