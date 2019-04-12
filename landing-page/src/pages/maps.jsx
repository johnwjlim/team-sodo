import React from 'react'
// import ReactMapGL, {NavigationControl} from 'react-map-gl'
import MapGL from 'react-map-gl'
// import mapboxgl from 'mapbox-gl'

const TOKEN = 'pk.eyJ1Ijoid2psaW0iLCJhIjoiY2plNGtpMXFpNmw3ZTMzcXA4a3l1NmdwOSJ9.2Ou7bageJ-DCfiASBrV5HA';


const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        longitude: -122.3,
        latitude: 47.6,
        zoom: 12.44,
        width: '100vw',
        height: '100vh'
      }
    }
  };

  // componentDidMount() {
  //   const { long, lat, zoom} = this.state;

  //   const Map = new mapboxgl.Map({
  //     container: this.mapContainer,
  //     style: 'mapbox://styles/mapbox-streets-v9'
  //   });
  // }

  render() {
    return (
      <MapGL
        mapboxApiAccessToken={TOKEN}
        {...this.state.viewport}
        onViewPortChange={(viewport) => this.setState({viewport})}
      />
    )
  };

}

export default Map;

