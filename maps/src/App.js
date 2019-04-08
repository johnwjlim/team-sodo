import React, { Component } from 'react';
import './App.css';
import ReactMapGL, {Marker, GeolocateControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Panel from './components/panel'


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
  top: 0,
  left: 0,
  padding: '10px'
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        longitude: -122.3,
        latitude: 47.6,
        zoom: 12.44,
        width: "100vw",
        height: "100vh"
      },
      interactionState: {},
      settings: {
        dragPan: true,
        dragRotate: true,
        scrollZoom: true,
        touchZoom: true,
        touchRotate: true,
        keyboard: true,
        doubleClickZoom: true,
        minZoom: 11,
        maxZoom: 18,
        minPitch: 0,
        maxPitch: 85
      }
    }
  };

  _onViewportChange = viewport => this.setState({viewport})


  render() {
    return (
      <>
        <Panel />
        <ReactMapGL
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/wjlim/cju7ha5756yds1fo9r7tz519u"
          {...this.state.viewport}
          {...this.state.settings}
          onViewportChange={this._onViewportChange}
        >
          <Marker latitude={47.65} longitude={-122.30}>
            <svg style={{...pinStyle}}>
              <path d={ICON}></path>
            </svg>
          </Marker>
          <div style={geolocateStyle}>
            <GeolocateControl
            onViewportChange={(viewport) => this._onViewportChange(viewport)}
            positionOptions={{enableHighAccuracy: true}}
            trackUserLocation={true}
            >
            </GeolocateControl>
          </div>
        </ReactMapGL>
      </>
    );
  }
}

export default App;
