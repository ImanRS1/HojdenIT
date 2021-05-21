import React from "react"
import styled from "styled-components"
import LandingPage from "../components/LandingPage"
import Navbar from "../components/Navbar"
import Cables from "../components/Cables"
import About from "../components/AboutUs"
import Footer from "../components/Footer"
import Services from "../components/Services"
import Contact from "../components/Contact"
import global from "../styles/global.css"

export default function Home() {
  return (
    <MainWrapper>
      <Navbar />
      <LandingPage />
      <Cables />
      <MainContainer>
        <About />
      </MainContainer>
      <Services />
      <Contact />
      <Footer />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  background-image: linear-gradient(to bottom left, #2599f8, #282828);
  width: 100%;
`

const MainContainer = styled.div`
  max-width: 1200px;
  color: white;
  margin: 0 auto;
  height: 100%;
  /* min-height: 600px; */
  position: relative;
`
