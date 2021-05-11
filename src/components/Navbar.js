import React from "react"
import styled from "styled-components"
import cLogo from "../images/HöjdenITLogo-white.png"
import "../styles/typography.css"

import { useViewportScroll } from "framer-motion"

const Nav = () => {
  const { scrollY } = useViewportScroll()

  scrollY.onChange(y => {
    // y = scroll position
    //Do Something
  })
}

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <img src={cLogo} />
        <NavList className="NavList">
          <ul>
            <li>OM OSS</li>
            <li>VÅRA TJÄNSTER</li>
            <li>KONTAKT</li>
          </ul>
        </NavList>
      </NavbarContainer>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  /* background-color: #5f5f5f; */
`

const NavbarContainer = styled.div`
  max-width: 1200px;
  position: sticky;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;

  img {
    height: 10rem;
  }
`

const NavList = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  font-family: "AllertaStencil";
  font-size: 1.5rem;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style: none;
  }
`
