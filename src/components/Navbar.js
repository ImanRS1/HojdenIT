import React from "react"
import styled from "styled-components"
import cLogo from "../images/HöjdenITLogo.png"

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <img src={cLogo} />
      </NavbarContainer>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
`

const NavbarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  z-index: 1;

  img {
    height: 10rem;
    z-index: 1;
  }
`
