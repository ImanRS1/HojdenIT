import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import {
  staggerAnimations,
  fadeInFromLeft,
  fadeInFromRight,
  titleAnim,
} from "../animations"

export default function Services() {
  return (
    <ServicesWrapper>
      <h1>VÅRA TJÄNSTER</h1>
      <ServiceCointainer
      /* initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }} */
      >
        <motion.ul
          className="listOne"
          variants={staggerAnimations}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={fadeInFromLeft}>Lorem</motion.li>
          <motion.li variants={fadeInFromLeft}>Lorem</motion.li>
          <motion.li variants={fadeInFromLeft}>Lorem</motion.li>
          <motion.li variants={fadeInFromLeft}>Lorem</motion.li>
          <motion.li variants={fadeInFromLeft}>Lorem</motion.li>
        </motion.ul>
        <motion.ul
          className="listTwo"
          variants={staggerAnimations}
          initial="hidden"
          animate="show"
        >
          <motion.li variants={fadeInFromRight}>Lorem</motion.li>
          <motion.li variants={fadeInFromRight}>Lorem</motion.li>
          <motion.li variants={fadeInFromRight}>Lorem</motion.li>
          <motion.li variants={fadeInFromRight}>Lorem</motion.li>
          <motion.li variants={fadeInFromRight}>Lorem</motion.li>
        </motion.ul>
      </ServiceCointainer>
    </ServicesWrapper>
  )
}

const ServiceCointainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  .listOne,
  .listTwo {
    margin: 1rem;
    font-family: "UbuntuLight";
    font-size: 2rem;
    line-height: 1.9rem;
    li {
      list-style-type: none;
      margin: 3rem;
    }
  }
`

const ServicesWrapper = styled(motion.div)`
  height: 1500px;
  max-width: 1200px;
  margin: 7rem auto;
  h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-family: "AllertaStencil";
    font-weight: lighter;
    font-size: 3rem;
  }
`
