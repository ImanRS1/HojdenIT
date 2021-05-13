import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import CountUp from "./CountUpNumber"

export default function AboutUs() {
  return (
    <AboutWrapper>
      <h1>OM OSS</h1>
      <CountUp />
    </AboutWrapper>
  )
}

const AboutWrapper = styled(motion.div)`
  margin-top: 10rem;
  h1 {
    text-align: centeR;
    font-family: "AllertaStencil";
    font-weight: lighter;
    font-size: 3rem;
  }
`
