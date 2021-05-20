import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <ContactWrapper>
      <h1>KONTAKT</h1>
      <p>kontakta oss...</p>
    </ContactWrapper>
  )
}

const ContactWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-family: "AllertaStencil";
    font-weight: lighter;
    font-size: 3rem;
  }
`
