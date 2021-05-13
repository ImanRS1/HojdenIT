import React, { useState } from "react"
import styled from "styled-components"
import cLogo from "../images/HöjdenITLogo-white.png"
import "../styles/typography.css"
import { motion, useViewportScroll } from "framer-motion"

export default function Navbar() {
  /* let scrolled = true */
  /* const { scrollY } = useViewportScroll() */
  const [scrolled, setScrolled] = useState(false)

  /* const checkScroll = () => {
    scrollY.onChange(y => {
      /* console.log(y)
      console.log(scrolled) */
  /*  if (y > 23) {
        return false
      } else {
        return true
      }
    }) */
  /*  } */

  const imgVariant = {
    scrolled: { height: "6rem" },
    notScrolled: { height: "10rem" },
  }

  const navVariant = {
    scrolled: { background: "rgba(0,0,0,0.5)" },
    notScrolled: { background: "rgba(0,0,0,0)" },
  }

  const navListVariant = {
    scrolled: { fontSize: "1.2rem" },
    notScrolled: { fontSize: "1.5rem" },
  }

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <NavbarWrapper
      animate={scrolled ? "scrolled" : "notScrolled"}
      variants={navVariant}
      transition={{ duration: 0.5 }}
    >
      <NavbarContainer>
        <motion.img
          src={cLogo}
          animate={scrolled ? "scrolled" : "notScrolled"}
          variants={imgVariant}
          transition={{ duration: 0.5 }}
        />
        <NavList>
          <motion.ul
            animate={scrolled ? "scrolled" : "notScrolled"}
            initial={{ fontSize: "1.2rem" }}
            variants={navListVariant}
            transition={{ duration: 0.5 }}
          >
            <li>OM OSS</li>
            <li>VÅRA TJÄNSTER</li>
            <li>KONTAKT</li>
          </motion.ul>
        </NavList>
      </NavbarContainer>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled(motion.div)`
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
`

const NavbarContainer = styled(motion.div)`
  max-width: 1200px;
  position: sticky;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  img {
    height: 10rem;
  }

  .navScrolled {
    background-color: teal;
    font-size: 10rem;
    img {
      height: 10rem;
    }
  }
`

const NavList = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  font-family: "AllertaStencil";
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style: none;
  }
  li:hover {
    cursor: pointer;
    color: #4aa0e9;
  }
`
