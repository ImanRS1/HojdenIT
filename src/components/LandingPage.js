import React from "react"
import styled from "styled-components"
import backGImage from "../images/placeholder3.jpg"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div>
      <LandingPageWrapper>
        <BackGImage>
          <img className="bPic" src={backGImage} />
        </BackGImage>
        <SloganWrapper>
          <LandingSlogon
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>HöjdenIT - effektiv, kunnig och nära</h1>
            <h3>Din problemlösare vid fiberinstallation och kabeldragning</h3>
          </LandingSlogon>
        </SloganWrapper>
      </LandingPageWrapper>
    </div>
  )
}

const LandingSlogon = styled(motion.div)`
  position: absolute;
  top: 22rem;
  z-index: 1;
  font-family: "AllertaStencil";
  font-size: 1.2rem;

  text-transform: uppercase;
  h1 {
    font-weight: lighter;
    font-size: 3rem;
  }
  h3 {
    font-weight: lighter;
  }
`

const SloganWrapper = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
`

const BackGImage = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  .bPic {
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    object-fit: cover;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.7)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    );
  }
`

const LandingPageWrapper = styled.div`
  height: 100vh;

  /*   width: 100vw; */
`
