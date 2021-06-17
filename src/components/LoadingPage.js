import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import companyLogo from "../images/HöjdenLogo.svg"
import "../styles/typography.css"
import loadingCircle from "../images/circleSVG.svg"

export default function LoadingPage() {
  return (
    <Wrapper>
      <LogoAndNameContainer>
        <img src={companyLogo} />
        <p>Höjden IT</p>
        <img src={loadingCircle} className="lCircle" />
      </LogoAndNameContainer>
    </Wrapper>
  )
}

const LogoAndNameContainer = styled(motion.div)`
  /*   transform: scale(0.5); */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  width: 30rem;
  font-family: "AllertaStencil";
  font-size: 3rem;
  letter-spacing: 0.1rem;
  p {
    z-index: 3;
  }

  .lCircle {
    height: 50rem;
  }
  img {
    height: 21rem;
    position: absolute;
  }
`

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 199;
  top: 0;
  left: 0;
  background-image: linear-gradient(to bottom left, #2599f8, #282828);
`
