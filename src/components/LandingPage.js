import React, { useState } from "react"
import styled from "styled-components"
import backGImage from "../images/placeholder3.jpg"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [stickySlogan, setStickySlogan] = useState(true)
  let initWindowHeight = window.innerHeight
  let breakPont = initWindowHeight * 0.7

  window.onscroll = function () {
    if (initWindowHeight - window.scrollY < breakPont) {
      setStickySlogan(false)
    } else {
      setStickySlogan(true)
    }
  }

  const sloganFader = {
    scrolled: { opacity: 1 },
    notScrolled: { opacity: 0 },
  }

  return (
    <div>
      <LandingPageWrapper>
        <BackGImage>
          <img className="bPic" src={backGImage} alt={"fiber optics"}/>
        </BackGImage>
        <SloganWrapper
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <LandingSlogon
            animate={stickySlogan ? "scrolled" : "notScrolled"}
            variants={sloganFader}
            transition={{ duration: 0.3 }}
          >
            <h1>HöjdénIT - effektiv, kunnig, nära</h1>
            <h3>Din helhetslösning vid fiber och coaxiala installationer.</h3>
          </LandingSlogon>
        </SloganWrapper>
      </LandingPageWrapper>
    </div>
  )
}

const LandingSlogon = styled(motion.div)`
  z-index: 3;
  font-family: "AllertaStencil";
  font-size: 1.2rem;
  position: fixed;
  text-transform: uppercase;
  h1 {
    font-weight: lighter;
    font-size: 3rem;
  }
  h3 {
    font-weight: lighter;
  }

  @media all and (max-width: 1000px) {
    margin: 1rem;
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1rem;
    }
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
  overflow: hidden;
`
