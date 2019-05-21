import React, {useEffect, useState} from 'react';
import ReactMapGL, {Marker, GeolocateControl, LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_VIEWPORT } from '../../../state/constants'

const TOKEN = 'pk.eyJ1Ijoid2psaW0iLCJhIjoiY2plNGtpMXFpNmw3ZTMzcXA4a3l1NmdwOSJ9.2Ou7bageJ-DCfiASBrV5HA';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none'
};

const GeolocateStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.25em 1em;
`;

export default function Map() {
  const dispatch = useDispatch()
  const viewport = useSelector(state => state.viewportReducer.viewport)
  const category = useSelector(state => state.categoryReducer)
  const activeListing = useSelector(state => state.listingReducer)
  const activeCounty = category.activeCounty
  
  useEffect(() => console.log(category), [category])
  useEffect(() => console.log(activeListing))
  
  const [settings, setSettings] = useState({
    dragPan: true,
    dragRotate: true,
    scrollZoom: true,
    touchZoom: true,
    touchRotate: true,
    keyboard: true,
    doubleClickZoom: true,
    minZoom: 2,
    maxZoom: 18,
    minPitch: 0,
    maxPitch: 85,
  })

  function _onViewportChange(viewport) {
    dispatch({type: UPDATE_VIEWPORT, payload: viewport})
  }


  function compileMarkers() {
    let data = category.data.dialysis;
    if (data != null) {
      if (activeCounty === "ALL") {
        console.log(data);
        return renderMarkers(data);
      } else {
        let array = [];
        data.forEach((object, index) => {
          if (object.County === activeCounty) {
            array.push(object)
          }
        })
        console.log(array);
        return renderMarkers(array);
      }
    }
  }

  function renderMarkers(data) {
    return data.map((object, index) => {
      let raw = object.Location;
      let lat = parseFloat(raw.slice(1, raw.indexOf(",")))
      let long = parseFloat(raw.slice(raw.indexOf(" ") + 1, raw.indexOf(")")))
      return (
        <Marker
          key={index}
          latitude={lat}
          longitude={long}
          offsetLeft={-12}
          offsetRight={-24}
        >
          <svg style={{...pinStyle}}>
            <path d={ICON}></path>
          </svg>
        </Marker>
      )
    })
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
            onViewportChange={_onViewportChange}
            positionptions={{enableHighAccuracy: true}}
            trackUserLocation={true}
          />
        </GeolocateStyle>
        {compileMarkers()}
      </ReactMapGL>
  )

}
  