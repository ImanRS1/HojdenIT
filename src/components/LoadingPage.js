import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function LoadingPage() {
  return <Wrapper></Wrapper>
}

const Wrapper = styled(motion.div)`
  overflow-x: hidden;
  /* height: 100vh;
  width: 100vw; */
  position: absolute;
  z-index: 199;
  top: 0;
  left: 0;
  background-color: blue;
`
