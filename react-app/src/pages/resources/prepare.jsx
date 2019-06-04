import React from 'react';
import Papa from 'papaparse';
import styled from "styled-components"
import { Card } from 'react-bootstrap';
import Spinner from 'react-spinner-material';
import Header from '../../components/resources/test-header'
import SEO from '../../components/seo'
import coverImage from './rain.jpg'
import './styles.css'

const Container = styled.div`
  position: relative;
  z-index: 20;
  // padding: 1.25rem 0;
  padding: 0.5rem 0;
  padding-bottom: 0;
  background: #ffffff;
  justifyContent: 'space-between'
`;
const Container3 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #bf0000;
`;
const Content = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1.25rem;
  margin-top: 0;
`;
// const Header = styled.h1`
//   font-weight: 700;
//   font-size: 48pt;
//   padding-left: 150px;
//   letter-spacing: 10px;
//   @media (max-width: 768px) {
//     font-size: 28pt;
//   }
// `;

const Header1 = styled.h1`
  padding-top: 1rem;
`;
const Center = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
min-height: 70vh;
`;
const ImageWrapper = styled.div`
  position: fixed;
  padding-top: 0;
`;
const Container2 = styled.div`
  position: relative;
  top: 30vh;
  z-index: 20;
  text-align: center;
  padding: 0 1.25em;
  @media (max-width: 768px) {
    top: 19vh;
  }
`;
const Header2 = styled.h1`
  letter-spacing: 10px;
  font-size: 2.8em;
  color: white;
  margin: 0;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;
const Header3 = styled.h1`
  font-size: 2em;
  color: black;
  margin: 0;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2.5em;
    text-align: center;
  }
`;
const Header4 = styled.h1`
  font-size: 1.65em;
  color: black;
  margin: 0;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2.5em;
    text-align: center;
  }
`;
const Header5 = styled.h1`
  font-size: 1.4em;
  color: black;
  margin: 0;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2.5em;
    text-align: center;
  }
`;
const Subheader2 = styled.h2`
  font-weight: 400;
  color: white;
  font-size: 1.5em;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;
const Background2 = styled.div`
  position: relative;
  padding: 1.25em;
  top: 68vh;
  z-index: 10;
  background: linear-gradient(rgba(255, 255, 255, 0.75), rgba(255,255,255, .9), rgba(255,255,255, .9), rgba(255, 255, 255, 0.75));  
  margin-bottom:10rem;
`;
const Box = styled.div`
  max-width: 80em;
  margin: 2em auto;
  padding-top:5rem;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  min-height: 800px;
  object-fit: cover;
`;
const Bar = styled.hr`
    align:left;
    background-image: linear-gradient(90deg, rgb(0,0,0,.5), transparent);
    border: 0;
    height: .3rem;
`;
const CenterLinks = styled.div`
padding-left:16rem;
padding-right:16rem;
text-align: center;
display:flex;
justify-content:space-around;
`;

/**
 * Sorry I had to move your styles.css page to the React component. 
 * It was getting applied globally and affecting everything else otherwise.
 */

const StyledImage = styled.img`
  padding-top: 1%;
  object-fit: cover;
  width: 95%;
  height: 20rem;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;


const StyledLink = styled.a`
  text-decoration: none;
  color: rgb(74, 37, 155);
  &:hover {
    text-decoration: underline;
  }
  &:visitied {
    color: rgb(114, 104, 136);
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
`

class Prepare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>

                <SEO title="Preparedness" />
                <Header />
                <ImageWrapper>
                    <Image src={coverImage} alt="background image - rainy road" />
                </ImageWrapper>
                <Container2>
                    <Header2 aria-label="header">STAY INFORMED</Header2>
                    <Subheader2  aria-label="sub-header"> Information for Alerts, Road Closures, and Other Guides</Subheader2>
                </Container2>
                <Background2>
                    <Box>

                        <Header3 aria-label="header1">County Emergency Alert Systems  </Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <Text><StyledLink href="" target="_blank" aria-label="clickable link">RARET Regional Road Closure Tool -- need link!</StyledLink></Text>
                        <Text><StyledLink href="https://public.coderedweb.com/CNE/en-US/BF0D5C5CC09C" target="_blank" aria-label="clickable link">King County</StyledLink></Text>
                        <Text><StyledLink href="https://www.piercecountywa.org/921/Pierce-County-ALERT" target="_blank" aria-label="clickable link">Pierce County</StyledLink></Text>
                        <Text><StyledLink href="http://public.alertsense.com/SignUp/public.aspx?regionid=1129" target="_blank" aria-label="clickable link">Snohomish County</StyledLink></Text>
                        <Text><StyledLink href="http://www.snoco.org/App4/SPW/pwapp/roads/emclosure/index.html" target="_blank" aria-label="clickable link">Snohomish County Road Closures</StyledLink></Text>
                        <Text><StyledLink href="https://www.wsdot.com/traffic/trafficalerts/pugetsound.aspx" target="_blank" aria-label="clickable link">Washington State Traffic Alerts</StyledLink></Text>
                        <br /><br /><br /><br />

                        <Header3 aria-label="header2">City Emergency Alert Systems  </Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <Text><StyledLink href="https://www.smart911.com/smart911/registration/registrationLanding.action?cdnExternalPath=" target="_blank" aria-label="clickable link">Seattle</StyledLink></Text>
                        <Text><StyledLink href="https://tacomawa.my.gov-i.com/signup" target="_blank" aria-label="clickable link">Tacoma</StyledLink></Text>
                        <Text><StyledLink href="https://everettwa.gov/list.aspx?ListID=169" target="_blank" aria-label="clickable link">Everett</StyledLink></Text>
                        <br /><br /><br /><br />

                        <Header3 aria-label="header3">County Emergency Management Departments </Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <Text><StyledLink href="http://snohomishcountywa.gov/180/Emergency-Management" target="_blank" aria-label="clickable link">Snohomish County Emergency Management</StyledLink></Text>
                        <Text><StyledLink href="http://www.kingcounty.gov/depts/emergency-management.aspx" target="_blank" aria-label="clickable link">King County Emergency Management</StyledLink></Text>
                        <Text><StyledLink href="https://www.co.pierce.wa.us/Index.aspx?NID=104" target="_blank" aria-label="clickable link">Pierce County Emergency Management</StyledLink></Text>
                        <br /><br /><br /><br />

                        <Header3 aria-label="header4">Take Weather By Storm</Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <Text aria-label="header 4 description"><StyledLink href="http://takewinterbystorm.org/" target="_blank" aria-label="clickable link">Take Winter by Storm</StyledLink> is a winter weather preparedness resource for all of Western Washington. Washington State has many
                            hazards including heavy winds, earthquakes, freezing temperatures, and flooding. Check out the <StyledLink href="http://takewinterbystorm.org/" target="_blank" aria-label="clickable link">Take Winter by Storm</StyledLink> website
                            to learn what the most relevant threats are in your area. Then, use the <StyledLink href="https://www.hopelink.org/sites/default/files/Know%20Your%20Hazards.docx" target="_blank" aria-label="clickable link">Know Your Hazards</StyledLink> document
                            to create a plan.</Text>
                        <br /><br /><br /><br />

                        <Header3 aria-label="header5">All Hazards Preparedness</Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <Text aria-label="header 5 description">The <StyledLink href="https://www.hopelink.org/sites/default/files/Washington%20Hazards.pdf" target="_blank" aria-label="clickable link">Washington Hazards</StyledLink> document provides preparation and response tips to Washington’s most
                            common hazards. Additional resources for <StyledLink href="https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Flooding_0.pdf" target="_blank" aria-label="clickable link">Flooding</StyledLink>, <StyledLink href=
                                "https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Heavy%20Wind.pdf" target="_blank" aria-label="clickable link"> Heavy Wind</StyledLink> , and  <StyledLink href=
                                    "https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Freezing%20Temps.pdf" target="_blank" aria-label="clickable link">Freezing Temperatures</StyledLink>.</Text>
                        <br /><br /><br /><br />

                        <Header3 aria-label="header6">All Hazards Preparedness Resources</Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <CenterLinks>
                            <Text><StyledLink href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-English.pdf" target="_blank" aria-label="clickable link">English</StyledLink>
                            </Text><Text>  |  </Text><Text><StyledLink href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Korean.pdf" target="_blank" aria-label="clickable link">Korean</StyledLink>
                            </Text><Text>  |  </Text><Text><StyledLink href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Russian.pdf" target="_blank" aria-label="clickable link">Russian</StyledLink>
                            </Text><Text>  |  </Text><Text><StyledLink href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Spanish.pdf" target="_blank" aria-label="clickable link">Spanish</StyledLink>
                            </Text><Text>  |  </Text><Text><StyledLink href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Tagalog.pdf" target="_blank" aria-label="clickable link">Tagalog</StyledLink>
                            </Text><Text>  |  </Text><Text><StyledLink href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Chinese.pdf" target="_blank" aria-label="clickable link">Chinese</StyledLink>
                            </Text><Text>  |  </Text><Text><StyledLink href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Vietnamese.pdf" target="_blank" aria-label="clickable link">Vietnamese</StyledLink>
                            </Text>
                            <br /><br />
                        </CenterLinks>
                        <Text>Personal and family preparedness is one of the most important things. If your employees are prepared at home, they are more likely to come to work. You should encourage your employees
                                to create <StyledLink href="https://www.hopelink.org/sites/default/files/Family%20Emegency%20Plan.pdf" target="_blank" aria-label="clickable link">Family Emergency Plan</StyledLink> and know <StyledLink href=
                                "https://www.hopelink.org/sites/default/files/Alternative%20Routes%20to%20Work.docx" target="_blank" aria-label="clickable link">Alternative Routes to Work</StyledLink> .</Text>
                        <br /><br /><br /><br />

                        <Header4 aria-label="header7">Additional Preparedness Resources</Header4>
                        <Bar></Bar>
                        <br /><br /><br />
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20EmergencyChecklist.pdf" target="_blank" aria-label="clickable link">Emergency Checklist</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Clothing%20and%20Bedding.pdf" target="_blank" aria-label="clickable link">Clothing and Bedding </StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Emergency%20Financial%20Documents.pdf" target="_blank" aria-label="clickable link">Emergency Financial Documents</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Equipment%20and%20Tools.pdf" target="_blank" aria-label="clickable link">Equipment and Tools</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Food.pdf" target="_blank" aria-label="clickable link">Food</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Medications.docx" target="_blank">Medications</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Neighborhood%20Contact.docx" target="_blank" aria-label="clickable link">Neighborhood Contact</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Pet%20Emergency%20Supplies%20and%20Traveling%20Kit.docx" target="_blank" aria-label="clickable link">Pet Emergency Supplies and Traveling Kit</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Preparing%20Children%20for%20Emergencies.pdf" target="_blank" aria-label="clickable link">Preparing Children for Emergencies</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Preparing%20Seniors%20for%20Emergencies.docx" target="_blank" aria-label="clickable link">Preparing Seniors for Emergencies</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Public%20Safety%20Locations.docx" target="_blank" aria-label="clickable link">Public Safety Locations</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Sanitation%20and%20Hygiene%20Supplies.docx" target="_blank" aria-label="clickable link">Sanitation and Hygiene Supplies</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Water.pdf" target="_blank" aria-label="clickable link">Water</StyledLink></Text>
                        <br /> <br />
                        <Text aria-label="header 7 description"><b>Driving or taking public transit in the winter can be tricky. Below is a list of resources to help you navigate the winter weather.</b></Text>
                        <br />
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Driving%20Brochure.pdf" target="_blank" aria-label="clickable link"> WSDOT Driving Brochure</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Transit.pdf" target="_blank" aria-label="clickable link">Transit</StyledLink></Text>
                        <Text><StyledLink href="https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Winter%20Driving.pdf" target="_blank" aria-label="clickable link">Winter Driving</StyledLink></Text>
                        <br /><br /><br /><br />

                        <Header5 aria-label="header8">Other Resources</Header5>
                        <Bar></Bar>
                        <br /><br /><br />
                        <Text><StyledLink href="http://makeitthrough.org/" target="_blank">What to do to make it through</StyledLink>  <b>|</b>  <StyledLink href="http://makeitthrough.org/translated-materials/" target="_blank" aria-label="clickable link">Translated materials</StyledLink></Text>
                        <Text><StyledLink href="http://www.weather.gov/ilm/mobile" target="_blank">Sign up to receive NWS severe weather alerts</StyledLink></Text>
                        <Text><StyledLink href="https://www.ready.gov/" target="_blank">FEMAs Ready Program</StyledLink>  <b>|</b> <StyledLink href="https://www.ready.gov/individuals-access-functional-needs" target="_blank" aria-label="clickable link">Preparedness information for People with Disabilities and others with access and functional needs </StyledLink></Text>
                        <br /><br /><br /><br />

                        <Header5 aria-label="header9">Data Tools & Data Maps</Header5>
                        <Bar></Bar>
                        <br /><br /><br />
                        <Text><StyledLink href="https://svi.cdc.gov/map.aspx?txtzipcode=98409&btnzipcode=Submit" target="_blank" aria-label="clickable link">CDC Social Vulnerability Index Tool</StyledLink> </Text>
                        <Text><StyledLink href="https://test-fortress.wa.gov/doh/newwtn/WTNIBL" target="_blank" aria-label="clickable link"> Washington Tracking Network (environmental public health data)</StyledLink> </Text>
                        <Text>Data Mapping Tools - Know your community: <StyledLink href="http://www.phe.gov/empowermap/Pages/default.aspx" target="_blank" aria-label="clickable link"> Public Health emPOWER Maps show individuals who have power dependencies</StyledLink></Text>
                        <Text><StyledLink href="https://www.dshs.wa.gov/sesa/research-and-data-analysis/maps" target="_blank" aria-label="clickable link">Dept. Social and Health Services Maps:</StyledLink> Includes maps on Limited English Proficient populations (by county) and locations of assisted living facilities, nursing homes and other care facilities.</Text>




                        <br /><br /><br /> <br /><br /><br /><br />
                    </Box>
                </Background2>





                <ImageContainer>
                    <StyledImage className='cover' src={coverImage} />
                </ImageContainer>
            </div>
        );
    }
}
export default Prepare;