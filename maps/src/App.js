import React, { Component, useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components'

import Title from './components/panel/title'
import Map from './components/map'
import Dummy from './data/dummy'

import Card from './components/panel/card'

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

const ListItem = styled.li`
  cursor: pointer;
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

const PanelFooter = styled.a`
  position: absolute;
  bottom: 0;
  color: #767676;
  letter-spacing: -0.5px;
  font-size: 14px;
  margin-top: 2em;
  text-align: center;
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
  const [center, setCenter] = useState({});

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
            <ListItem key={object.title} onClick={() => {
              setCenter(object.coord);
            }}>
              <Card object={object} />
            </ListItem>
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
      titles.map((title, index) => {
        return (
          <StyledLink key={index} onClick={() => {
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
        <PanelFooter href="https://github.com/johnwjlim/team-sodo/tree/master/maps" target="_blank" rel="noopener noreferrer">github.com/johnwjlim/team-sodo/tree/master/maps</PanelFooter>
      </Panel>
      <Map objects={visible} center={center} />
    </Container>
  )
}

export default App;
