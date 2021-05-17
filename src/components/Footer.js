import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <h1>Footer</h1>
      </FooterContainer>
    </FooterWrapper>
  )
}

const FooterContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`

const FooterWrapper = styled(motion.div)`
  width: 100vw;
  background-color: #1b1b1b;
  height: 12rem;
  margin-top: 10rem;
`
