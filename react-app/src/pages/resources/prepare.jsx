import React from 'react';
import Papa from 'papaparse';
import styled from "styled-components"
import { Card } from 'react-bootstrap';
import Spinner from 'react-spinner-material';
import Header from '../../components/header'
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

class Prepare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>

                <SEO title="Preparation" />
                <Header />
                <ImageWrapper>
                    <Image src={coverImage} />
                </ImageWrapper>
                <Container2>
                    <Header2>STAY INFORMED</Header2>
                    <Subheader2>Information for Alerts, Road Closures, and Other Guides</Subheader2>
                </Container2>
                <Background2>
                    <Box>

                        <Header3>County Emergency Alert Systems  </Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <p><a href="" target="_blank">RARET Regional Road Closure Tool -- need link!</a></p>
                        <p><a href="https://public.coderedweb.com/CNE/en-US/BF0D5C5CC09C" target="_blank">King County</a></p>
                        <p><a href="https://www.piercecountywa.org/921/Pierce-County-ALERT" target="_blank">Pierce County</a></p>
                        <p><a href="http://public.alertsense.com/SignUp/public.aspx?regionid=1129" target="_blank">Snohomish County</a></p>
                        <p><a href="http://www.snoco.org/App4/SPW/pwapp/roads/emclosure/index.html" target="_blank">Snohomish County Road Closures</a></p>
                        <p><a href="https://www.wsdot.com/traffic/trafficalerts/pugetsound.aspx" target="_blank">Washington State Traffic Alerts</a></p>
                        <br /><br /><br /><br />

                        <Header3>City Emergency Alert Systems  </Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <p><a href="https://www.smart911.com/smart911/registration/registrationLanding.action?cdnExternalPath=" target="_blank">Seattle</a></p>
                        <p><a href="https://tacomawa.my.gov-i.com/signup" target="_blank">Tacoma</a></p>
                        <p><a href="https://everettwa.gov/list.aspx?ListID=169" target="_blank">Everett</a></p>
                        <br /><br /><br /><br />

                        <Header3>County Emergency Management Departments </Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <p><a href="http://snohomishcountywa.gov/180/Emergency-Management" target="_blank">Snohomish County Emergency Management</a></p>
                        <p><a href="http://www.kingcounty.gov/depts/emergency-management.aspx" target="_blank">King County Emergency Management</a></p>
                        <p><a href="https://www.co.pierce.wa.us/Index.aspx?NID=104" target="_blank">Pierce County Emergency Management</a></p>
                        <br /><br /><br /><br />

                        <Header3>Take Weather By a Storm</Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <p><a href="http://takewinterbystorm.org/" target="_blank">Take Winter by Storm</a> is a winter weather preparedness resource for all of Western Washington. Washington State has many
                            hazards including heavy winds, earthquakes, freezing temperatures, and flooding. Check out the <a href="http://takewinterbystorm.org/" target="_blank">Take Winter by Storm</a> website
                            to learn what the most relevant threats are in your area. Then, use the <a href="https://www.hopelink.org/sites/default/files/Know%20Your%20Hazards.docx" target="_blank">Know Your Hazards</a> document
                            to create a plan.</p>
                        <br /><br /><br /><br />

                        <Header3>All Hazards Preparedness</Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <p>The <a href="https://www.hopelink.org/sites/default/files/Washington%20Hazards.pdf" target="_blank">Washington Hazards</a> document provides preparation and response tips to Washington’s most
                            common hazards. Additional resources for <a href="https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Flooding_0.pdf" target="_blank">Flooding</a>, <a href=
                                "https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Heavy%20Wind.pdf" target="_blank"> Heavy Wind</a> , and  <a href=
                                    "https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Freezing%20Temps.pdf" target="_blank">Freezing Temperatures</a>.</p>
                        <br /><br /><br /><br />

                        <Header3>All Hazards Preparedness Resources</Header3>
                        <Bar></Bar>
                        <br /><br /><br />
                        <CenterLinks>
                            <p><a href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-English.pdf" target="_blank">English</a>
                            </p><p>  |  </p><p><a href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Korean.pdf" target="_blank">Korean</a>
                            </p><p>  |  </p><p><a href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Russian.pdf" target="_blank">Russian</a>
                            </p><p>  |  </p><p><a href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Spanish.pdf" target="_blank">Spanish</a>
                            </p><p>  |  </p><p><a href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Tagalog.pdf" target="_blank">Tagalog</a>
                            </p><p>  |  </p><p><a href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Chinese.pdf" target="_blank">Chinese</a>
                            </p><p>  |  </p><p><a href="https://www.hopelink.org/sites/default/files/All-Hazard-WA-State-Vietnamese.pdf" target="_blank">Vietnamese</a>
                            </p>
                            <br /><br />
                        </CenterLinks>
                        <p>Personal and family preparedness is one of the most important things. If your employees are prepared at home, they are more likely to come to work. You should encourage your employees
                                to create a <a href="https://www.hopelink.org/sites/default/files/Family%20Emegency%20Plan.pdf" target="_blank">Family Emergency Plan</a> and know <a href=
                                "https://www.hopelink.org/sites/default/files/Alternative%20Routes%20to%20Work.docx" target="_blank">Alternative Routes to Work</a> .</p>
                        <br /><br /><br /><br />

                        <Header4>Additional Preparedness Resources</Header4>
                        <Bar></Bar>
                        <br /><br /><br />
                        <p><a href="https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20EmergencyChecklist.pdf" target="_blank">Emergency Checklist</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Clothing%20and%20Bedding.pdf" target="_blank">Clothing and Bedding </a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Emergency%20Financial%20Documents.pdf" target="_blank">Emergency Financial Documents</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Equipment%20and%20Tools.pdf" target="_blank">Equipment and Tools</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Food.pdf" target="_blank">Food</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Medications.docx" target="_blank">Medications</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Neighborhood%20Contact.docx" target="_blank">Neighborhood Contact</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Pet%20Emergency%20Supplies%20and%20Traveling%20Kit.docx" target="_blank">Pet Emergency Supplies and Traveling Kit</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Preparing%20Children%20for%20Emergencies.pdf" target="_blank">Preparing Children for Emergencies</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Preparing%20Seniors%20for%20Emergencies.docx" target="_blank">Preparing Seniors for Emergencies</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Public%20Safety%20Locations.docx" target="_blank">Public Safety Locations</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Sanitation%20and%20Hygiene%20Supplies.docx" target="_blank">Sanitation and Hygiene Supplies</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Water.pdf" target="_blank">Water</a></p>
                        <br /> <br />
                        <p><b>Driving or taking public transit in the winter can be tricky. Below is a list of resources to help you navigate the winter weather.</b></p>
                        <br />
                        <p><a href="https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Driving%20Brochure.pdf" target="_blank">WSDOT Driving Brochure</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Transit.pdf" target="_blank">Transit</a></p>
                        <p><a href="https://www.hopelink.org/sites/default/files/Take%20Winter%20by%20Storm%20-%20Winter%20Driving.pdf" target="_blank">Winter Driving</a></p>
                        <br /><br /><br /><br />

                        <Header5>Other Resources</Header5>
                        <Bar></Bar>
                        <br /><br /><br />
                        <p><a href="http://makeitthrough.org/" target="_blank">What to do to make it through</a>  <b>|</b>  <a href="http://makeitthrough.org/translated-materials/" target="_blank">Translated materials</a></p>
                        <p><a href="http://www.weather.gov/ilm/mobile" target="_blank">Sign up to receive NWS severe weather alerts</a></p>
                        <p><a href="https://www.ready.gov/" target="_blank">FEMAs Ready Program</a>  <b>|</b> <a href="https://www.ready.gov/individuals-access-functional-needs" target="_blank">Preparedness information for People with Disabilities and others with access and functional needs </a></p>
                        <br /><br /><br /><br />

                        <Header5>Data Tools & Data Maps</Header5>
                        <Bar></Bar>
                        <br /><br /><br />
                        <p><a href="https://svi.cdc.gov/map.aspx?txtzipcode=98409&btnzipcode=Submit" target="_blank">CDC Social Vulnerability Index Tool</a> </p>
                        <p><a href="https://test-fortress.wa.gov/doh/newwtn/WTNIBL" target="_blank"> Washington Tracking Network (environmental public health data)</a> </p>
                        <p>Data Mapping Tools - Know your community: <a href="http://www.phe.gov/empowermap/Pages/default.aspx" target="_blank"> Public Health emPOWER Maps show individuals who have power dependencies</a></p>
                        <p><a href="https://www.dshs.wa.gov/sesa/research-and-data-analysis/maps" target="_blank">Dept. Social and Health Services Maps:</a> Includes maps on Limited English Proficient populations (by county) and locations of assisted living facilities, nursing homes and other care facilities.</p>




                        <br /><br /><br /> <br /><br /><br /><br />
                    </Box>
                </Background2>





                <div className='imageContainer'>
                    <img className='cover' src={coverImage} />
                </div>
            </div>
        );
    }
}
export default Prepare;