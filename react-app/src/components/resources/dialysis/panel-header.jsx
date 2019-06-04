import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from '@reach/router'

const Container = styled.div`
  // padding: 1.5em;
  margin: 0 1.5em;
  margin-top: 1em;
`;

const Title =  styled(Link)`
  font-family: neue-haas-unica;
  text-decoration: none;
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 6px;
  color: #333333;
`;

export default function Header() {
  return (
    <Container>
      <Title to="/">RARET</Title>
    </Container>
  )
}