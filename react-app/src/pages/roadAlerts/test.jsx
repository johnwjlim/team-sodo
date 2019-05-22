import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react';
// import Header from '../../components/resources/test-header'
import Header from '../../components/header'


import { kingAlerts, snohomishAlerts } from "../../components/datascrape/alerts"

const MapContainer = styled.div`
  height: 60vh;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1.25em;
`

const Title = styled.h1`
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.1em;
`;
const Subtitle = styled.h3`
  font-weight: 400;
  margin: 0;
`;

const TitleBox = styled.div`
  margin: 1em 0;
  margin-bottom: 1.5em;
`;

const Card = styled.div`
  margin: 0 1.5em;
  border-bottom: 1px solid #dddddd;
  // cursor: pointer;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const CardBody = styled.div`
  padding: 0.5em 0;
`;

const CardText = styled.h3`
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.2em;
`;

const CardMicroText = styled.h4`
  color: #767676;
  font-weight: 400;
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 1.5em 1em;
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  background-color: white;
  height: 60vh;
  overflow: scroll;

`;

const ListTitle = styled.h4`
  color: #767676;
  font-weight: 400;
  margin: 0 1.5em;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 0.75em;
`;

const KEY = "AIzaSyBcyMTi0hYu1ZPfn1WyBTjIl0_RjUx3ZnM&"

export default function SimpleMap() {
  const [viewport, setViewport] = useState({
    center: {
      lat: 47.527,
      lng: -122.3
    },
    zoom: 9
  })
  const [kingDict, setKingDict] = useState([]);
  const [snohoDict, setSnohoDict] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const data = await kingAlerts();
      setKingDict(data);
    }
    fetchData();
  }, [])

  useEffect(() => {
    async function fetchData() {
      const data = await snohomishAlerts()
      setSnohoDict(data)
    }
    fetchData()
  }, [])

  function createList(array) {
    return array.map(object => {
      // console.log(object)
      return (
        <li 
          key={object.name} 
        >
          <Card>
            <CardBody>
              <CardText>{object.name}</CardText>
              {
                array === kingDict ?
                <CardMicroText>{object.info.date}</CardMicroText> :
                <CardMicroText>{object.info[0]}</CardMicroText>
              }
            </CardBody>
            <i className="material-icons" style={{fontSize: "30px", color: "#484848"}}>chevron_right</i>
          </Card>
        </li>
      )
    })
  }

  function renderList(dict) {
    if (dict.length > 0) {
      var tempDate = new Date();
      var date = tempDate.getFullYear() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getDate() + ', '+ tempDate.getHours()+':'+ tempDate.getMinutes();
      const currDate = "Last updated on: "+ date;
      return (
        <List>
          <ListTitle>{currDate}</ListTitle>
          {createList(dict)}
        </List>
      );
    } else {
      return <h4>Loading...</h4>
    }
  }   

  function handleApiLoaded(map, maps) {
    // var KML = new maps.KmlLayer({
    //     url: 'PATH_TO_KML'
    // });
    // KML.setMap(map);
    const trafficLayer = new maps.TrafficLayer()
    // trafficLayer.setMap(map)
    map.data.loadGeoJson('https://services2.arcgis.com/1UvBaQ5y1ubjUPmd/arcgis/rest/services/PCEOC_RoadOperations/FeatureServer/0//query?where=response_status%3C%3E%27Resolved%2FNo+Further+Action+Needed%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=standard&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=&returnGeometry=true&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=4326&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token=')
    var kingLayer = new maps.KmlLayer({
      url: 'https://gismaps.kingcounty.gov/ArcGIS/rest/services/RoadAlerts/KingCo_Road_Alerts/MapServer/2/query?f=kmz&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=4326&resultOffset=0&resultRecordCount=1000',
      // map: map
    }); 
    var snohomishLayer = new maps.KmlLayer({
      url: 'http://publicworks.snoco.org/RdClosures/SnocoRdClosures4GMaps.kml',
      // map: map
  });
    kingLayer.setMap(map)
    snohomishLayer.setMap(map)
    trafficLayer.setMap(map)  
    // map.setCenter({lat: 47.60, lng: -122.33});
  }

  return (
    <>
      <Header />
        <MapContainer>
          <GoogleMapReact
              bootstrapURLKeys={ {key: KEY} }
              defaultCenter={viewport.center}
              defaultZoom={viewport.zoom}
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
          </GoogleMapReact>
        </MapContainer>
        <Container>
          <TitleBox>
            <Title>King County</Title>
            <Subtitle>Road closures and restrictions in unincorporated King County</Subtitle>
            {
              renderList(kingDict)
            }
          </TitleBox>
        </Container>
        <Container>
          <TitleBox>
            <Title>Snohomish County</Title>
            <Subtitle>Road closures and restrictions in Snohomish County</Subtitle>
            {
              renderList(snohoDict)
            }
          </TitleBox>
        </Container>
    </>
  )
}