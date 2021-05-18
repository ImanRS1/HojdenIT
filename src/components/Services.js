import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function Services() {
  return (
    <ServicesWrapper>
      <h1>VÅRA TJÄNSTER</h1>
      <ServiceCointainer>
        <ul className="listOne">
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
        <ul className="listTwo">
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </ServiceCointainer>
    </ServicesWrapper>
  )
}

const ServiceCointainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  .listOne,
  .listTwo {
    margin: 1rem;
    font-family: "UbuntuLight";
    font-size: 1.5rem;
    line-height: 1.9rem;
    li {
      list-style-type: none;
    }
  }
`

const ServicesWrapper = styled(motion.div)`
  margin-top: 10rem;
  height: 1500px;
  h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-family: "AllertaStencil";
    font-weight: lighter;
    font-size: 3rem;
  }
`
