import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from '@reach/router';
import Header from '../../components/header'
import SEO from '../../components/seo'

import Title from '../../components/resources/title'


const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  position: relative;
  height: 100%;
  width: 23em;
  z-index: 1;
  background-color: white;
  padding: 1.5em;
  flex-shrink: 0;
`;


export default function Resources() {


  return(
    <>
    <SEO title="Resources"/>
    <Header />
    <Container>
      <Panel>
        <Title/>
      </Panel>
    </Container>
    </>
  )
}