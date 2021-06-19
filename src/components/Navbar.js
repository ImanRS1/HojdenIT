import React, { useState } from "react"
import styled from "styled-components"
import cLogo from "../images/HöjdenITLogo-white.png"
import companyLogo from "../images/HöjdenLogo.svg"
import "../styles/typography.css"
import { motion, useViewportScroll } from "framer-motion"
import { fadeIn } from "../animations"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  const imgVariant = {
    scrolled: { height: "7rem" },
    notScrolled: { height: "12rem" },
  }

  const navVariant = {
    scrolled: { background: "rgba(27,27,27,0.8)" },
    notScrolled: { background: "rgba(0,0,0,0)" },
  }

  const companyName = {
    scrolled: { fontSize: "1.8rem" },
    notScrolled: { fontSize: "3rem" },
  }

  const navListVariant = {
    scrolled: { fontSize: "1.2rem" },
    notScrolled: { fontSize: "1.5rem" },
  }

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <FadeWrapper animate="show" initial="hidden" variants={fadeIn}>

   
    <NavbarWrapper
      animate={scrolled ? "scrolled" : "notScrolled"}
      variants={navVariant}
      transition={{ duration: 0.5 }}
    >
      <NavbarContainer>
        <div className="logoContainer">
          <motion.img
            src={companyLogo}
            animate={scrolled ? "scrolled" : "notScrolled"}
            variants={imgVariant}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            animate={scrolled ? "scrolled" : "notScrolled"}
            variants={companyName}
            transition={{ duration: 0.5 }}
          >
            HöjdenIT
          </motion.p>
        </div>

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
    </FadeWrapper>
  )
}

const FadeWrapper = styled(motion.div)`
  
`

const NavbarWrapper = styled(motion.div)`
  z-index: 299;
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

  .logoContainer {
    position: relative;
    p {
      font-family: "AllertaStencil";
      position: absolute;
      top: 28%;
      left: 80%;
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
