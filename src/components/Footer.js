import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import developerImage from "../images/I.png"

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p className="copyrightText"> &copy; HöjdenIT 2021</p>
        <p className="developerText">
          Developed by <img src={developerImage} />
        </p>
      </FooterContainer>
    </FooterWrapper>
  )
}

const FooterContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .copyrightText {
    font-size: 1.5rem;
    font-family: "AllertaStencil";
  }
  .developerText {
    font-family: "UbuntuLight";
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      padding: 0 0.3rem;
    }
  }
  p {
    padding: 0.5rem;
  }
`

const FooterWrapper = styled(motion.div)`
  width: 100vw;
  background-color: #1b1b1b;
  height: 6rem;
`
