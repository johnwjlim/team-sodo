import React, {useEffect, useState} from 'react';
import ReactMapGL, {Marker, GeolocateControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components'

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
  top: 0;
  left: 0;
  margin: 1.25em;
`;

export default function Map() {
  const [viewport, setViewport] = useState({
    longitude: -122.3,
    latitude: 47.6,
    zoom: 12.44,
    width: "100vw",
    height: "100vh"
  })
  
  const [settings, setSettings] = useState({
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
    maxPitch: 85,
  })


  function _onViewportChange(viewport) {
    setViewport(viewport);
  }

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      mapStyle="mapbox://styles/wjlim/cju7ha5756yds1fo9r7tz519u"
      {...viewport}
      {...settings}
      onViewportChange={_onViewportChange}
    >
      <GeolocateStyle>
        <GeolocateControl 
          onViewportChange={ _onViewportChange}
          positionptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </GeolocateStyle>
    </ReactMapGL>
  )
}