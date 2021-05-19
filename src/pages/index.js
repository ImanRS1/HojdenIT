import React from "react"
import styled from "styled-components"
import LandingPage from "../components/LandingPage"
import Navbar from "../components/Navbar"
import Cables from "../components/Cables"
import About from "../components/AboutUs"
import Footer from "../components/Footer"
import Services from "../components/Services"
import global from "../styles/global.css"
import fiberImage from "../images/placeholder2.jpg"

export default function Home() {
  return (
    <MainWrapper>
      <Navbar />

      <LandingPage />
      <Cables />

      <MainContainer>
        <About />
      </MainContainer>
      {/*  <img src={fiberImage} className="fiberImage" /> */}
      <Services />

      <Footer />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  background-image: linear-gradient(to bottom left, #2599f8, #282828);
  width: 100%;

  /*   .fiberImage {
    object-fit: cover;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 160vh;
    width: 100vw;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.01),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.01),
      rgba(0, 0, 0, 0)
    );
  } */
`

const MainContainer = styled.div`
  max-width: 1200px;
  color: white;
  margin: 0 auto;
  min-height: 600px;
  position: relative;
`
