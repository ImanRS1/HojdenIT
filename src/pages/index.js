import React from "react"
import styled from "styled-components"
import LandingPage from "../components/LandingPage"
import LoadingPage from "../components/LoadingPage"
import Navbar from "../components/Navbar"
import About from "../components/AboutUs"
import Footer from "../components/Footer"
import Services from "../components/Services"
import Contact from "../components/Contact"
import global from "../styles/global.css"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <Wrapper>
      <LoadingPage />
      <MainWrapper1>
        <Navbar />
        <LandingPage />
        <MainContainer id="section1">
          <About />
        </MainContainer>
      </MainWrapper1>
      <div id="section2">
        <Services />
      </div>

      <MainWrapper2 id="section3">
        <Contact />
        <Footer />
      </MainWrapper2>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  overflow-x: hidden;
`

const MainWrapper1 = styled(motion.div)`
  background-image: linear-gradient(to bottom left, #2599f8, #282828);
  z-index: -2;
  width: 100%;
`

const MainWrapper2 = styled(motion.div)`
  background-image: linear-gradient(to bottom left, #1c6aaa, #282828);
  z-index: -2;
  width: 100%;
`

const MainContainer = styled(motion.div)`
  max-width: 1200px;
  color: white;
  margin: 0 auto;
  height: 100%;
  position: relative;
`
