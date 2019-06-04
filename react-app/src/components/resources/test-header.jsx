import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { Link } from '@reach/router'
import Media from 'react-media';
import {useSpring, animated} from 'react-spring'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import MobileMenu from '../mobileMenu'
import Arrow from "../../images/baseline-keyboard_arrow_down-24px.svg"
import Cross from "../../images/baseline-close-24px.svg"

const Wrap = styled.div`
  position: sticky;
  position: -webkit-sticky;   
  // position: relative;
  top: 0;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.88);
  margin: 0 auto;
`;

const Container = styled.nav`
  // top: 0;
  // left: 14vw;
  // width: 100%;
  // max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  color: #333333;
  // color: ${props => props.white ? "white" : "#333333"};
`;

const TitleLink =  styled(Link)`
  font-family: neue-haas-unica;
  text-decoration: none;
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 6px;
  color: #333333;
`;

const Title = styled.h2`
  font-family: neue-haas-unica;
  text-decoration: none;
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 6px;
  color: #333333;
  margin: 0;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  margin-left: 2.5rem;  
  color: #333333;
  letter-spacing: -0.3px;

  &:hover {
    border-bottom: 1px solid #333333;
  }
`

const Logo = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;

  &:hover {
    cursor: pointer;
    color: #767676;
  }
`

const Image = styled.img`
  margin: 0.5em;
`

const Content = styled.nav`
  // margin: 0 auto;
  // padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  color: #333333;
`

export default function Header() {
  const [open, toggle] = useState(false)
  // const menuStyles = useSpring({opacity: open ? 1 : 0})
  const menuStyles = useSpring({ 
    visibility: open ? 'visible' : 'hidden',
    opacity: open ? 1 : 0,
  })
  const iconStyles = useSpring({opacity: open ? 1 : 0})
  let targetElement = null
  useEffect(() => {
    targetElement = document.querySelector('#root');

    return function cleanup() {
      clearAllBodyScrollLocks()
    }
  }, [])

  function toggleMenu() {
    if (open) {
      clearAllBodyScrollLocks()
    } else {
      disableBodyScroll(targetElement)
    }
    toggle(!open)
  }
  return (
    <Wrap>
        <Media query="(max-width: 1080px)">
          {matches => matches ? (
            <>
              <Logo onClick={() => {
                if (open) {
                  clearAllBodyScrollLocks()
                } else {
                  disableBodyScroll(targetElement)
                }
                toggle(!open)
              } }>
              <Title>RARET</Title>
              {
                open ?
                <Image src={Cross} /> :
                <Image src={Arrow} />
              }
              </Logo>
            </>
          ): (
            <Container>
              <TitleLink to="/">RARET</TitleLink>
              <Links>
                <StyledLink to="/" tabindex='0' aria-label='tab1'>About</StyledLink>
                <StyledLink to="/cancer" aria-label='tab2'>Cancer Facilities</StyledLink>
                <StyledLink to="/dialysis" aria-label='tab3'>Dialysis Facilities</StyledLink>
                <StyledLink to="/em-contacts" aria-label='tab4'>Emergency Manager Contacts</StyledLink>
                <StyledLink to="/prepare" aria-label='tab5'>Preparedness</StyledLink>
                <StyledLink to="/test" aria-label='tab6'>Road Alerts</StyledLink>
              </Links>
            </Container>
          )}
        </Media>
        <animated.div style={menuStyles}>
          <MobileMenu />
        </animated.div>
    </Wrap>
  )
}