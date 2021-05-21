import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import drillHeadImage from "../images/drillHeadImage.png"
import cardImage from "../images/placeholder7.jpg"

export default function Contact() {
  return (
    <ContactContainer>
      <ContactWrapper>
        <h1>KONTAKT</h1>
        <p>kontakta oss...</p>
        {/*  <img src={drillHeadImage} className="drillImage" /> */}
      </ContactWrapper>
      <CardImageContainer>
        <img src={cardImage} className="CardImage" />
      </CardImageContainer>
    </ContactContainer>
  )
}

const CardImageContainer = styled(motion.div)`
  img {
    object-fit: cover;
    width: 100vw;
    min-height: 10rem;
    max-height: 40rem;
    height: 35%;
    position: absolute;
    right: 0;

    bottom: 0;
    z-index: 0;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.9)
    );
  }
`

const ContactWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;

  position: relative;

  h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-family: "AllertaStencil";
    font-weight: lighter;
    font-size: 3rem;
  }

  .drillImage {
    width: 15rem;
    height: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    );
  }
`
const ContactContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  min-height: 50rem;
`
