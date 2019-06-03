import React from 'react';
import styled from 'styled-components';


const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1em auto;
`;

const Card = styled.div`
  position: relative;
  flex: 1;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-bottom: 3rem;
  padding-top: 1.5rem;
  
`;

const CardHeader = styled.h4`
  font-weight: 600;
  margin: 0;
`;

const CardSub = styled.h4`
  font-weight: 400;;
`;

const Body = styled.div`
  margin: 0.25rem 0;  
`;

export default function contactGrid() {
    return (
        <Grid>
            <Card>

                <Body>
                    <CardHeader aria-label="contact name">David Lynch</CardHeader>
                    <CardSub aria-label="contact details"> Program Manager, Mobility Management <br />
                        dlynch@hopelink.org <br />
                        425.943.6751 <br /></CardSub>
                </Body>
            </Card>
        
          
            <Card>

                <Body>
                    <CardHeader aria-label="contact name">Melissa Brown Rotholtz</CardHeader>
                    <CardSub aria-label="contact details"> Mobility Coordinator <br />
                        mbrown@hopelink.org <br />
                        425.943.6730 <br /></CardSub>
                </Body>
            </Card>

        </Grid>
    )
}

