import React, { useState } from "react"
import styled from "styled-components"
import backGImage from "../images/placeholder3.jpg"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [stickySlogan, setStickySlogan] = useState(true)
  let initWindowHeight = window.innerHeight
  let breakPont = initWindowHeight * 0.5
  console.log(breakPont)

  window.onscroll = function () {
    console.log(stickySlogan)
    if (initWindowHeight - window.scrollY < breakPont) {
      setStickySlogan(false)
    } else {
      setStickySlogan(true)
    }
  }

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
            style={
              stickySlogan
                ? { position: "fixed" }
                : { position: "absolute", top: "95vh" }
            }
          >
            <h1>HöjdenIT - effektiv, kunnig och nära</h1>
            <h3>Din problemlösare vid fiberinstallation och coaxialdragning</h3>
          </LandingSlogon>
        </SloganWrapper>
      </LandingPageWrapper>
    </div>
  )
}

const LandingSlogon = styled(motion.div)`
  /* position: fixed; */
  /*   top: 90vh; */
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  height: 100vh;
`

const BackGImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
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
