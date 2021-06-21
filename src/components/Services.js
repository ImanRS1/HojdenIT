import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import {
  staggerAnimations1,
  staggerAnimations2,
  fadeInFromLeft,
  fadeInFromRight,
} from "../animations"
import fiberImage from "../images/placeholder2.jpg"
import { scrollReveal } from "../animations"
import { useScroll } from "../components/useScroll"
import socketImage from "../images/socket2.jpg"
import oneExpert from "../images/oneexpert.png"
import coaxImage from "../images/coaximage.png"
import fiberCables from "../images/fiberCables.jpg"

export default function Services() {
  const [element, controls] = useScroll()

  return (
    <ServiceMainContainer>
      <ServicesWrapper
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <h1>VÅRA TJÄNSTER</h1>
        <ServiceCointainer>
          <div>
            <ServiceObject>
              <img src={socketImage} />

              <div className="textContainer">
                <h2>Header</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                  repellendus?
                </p>
              </div>
            </ServiceObject>
            <ServiceObject>
              <img src={fiberCables} />

              <div className="textContainer">
                <h2>Header</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                  repellendus?
                </p>
              </div>
            </ServiceObject>
          </div>

          <div>
            <ServiceObject>
              <img src={oneExpert} />

              <div className="textContainer">
                <h2>Header</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                  repellendus?
                </p>
              </div>
            </ServiceObject>
            <ServiceObject></ServiceObject>
          </div>
          <div>
            <ServiceObject>
              <img src={coaxImage} />

              <div className="textContainer">
                <h2>Header</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                  repellendus?
                </p>
              </div>
            </ServiceObject>
            <ServiceObject></ServiceObject>
          </div>

          {/* <motion.ul
            className="listOne"
            variants={staggerAnimations1}
            initial="hidden"
            animate={controls}
          >
            <motion.li variants={fadeInFromLeft}>Lorem</motion.li>
            <motion.li variants={fadeInFromLeft}>Lorem</motion.li>
            <motion.li variants={fadeInFromLeft}>Lorem</motion.li>
            <motion.li variants={fadeInFromLeft}>Lorem</motion.li>
            <motion.li variants={fadeInFromLeft}>Lorem</motion.li>
          </motion.ul>
          <motion.ul
            className="listTwo"
            variants={staggerAnimations2}
            initial="hidden"
            animate={controls}
          >
            <motion.li variants={fadeInFromRight}>Lorem</motion.li>
            <motion.li variants={fadeInFromRight}>Lorem</motion.li>
            <motion.li variants={fadeInFromRight}>Lorem</motion.li>
            <motion.li variants={fadeInFromRight}>Lorem</motion.li>
            <motion.li variants={fadeInFromRight}>Lorem</motion.li>
          </motion.ul> */}
        </ServiceCointainer>
      </ServicesWrapper>
      <FiberImageContainerNew>
        <img src={fiberImage} className="fiberImage" />
      </FiberImageContainerNew>
      {/*  <FiberImageContainer>
        <img src={fiberImage} className="fiberImage" />
      </FiberImageContainer> */}
    </ServiceMainContainer>
  )
}

const ServiceObject = styled(motion.div)`
  height: 35rem;
  margin: 4rem 1rem;
  width: 20rem;
  border: 0.5rem solid #2c598f;
  border-radius: 1rem;
  background-color: rgba(40, 40, 40, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    /* border-radius: 50%; */
  }

  .textContainer {
    box-sizing: border-box;
    padding: 1rem;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    font-family: "UbuntuLight";
    font-size: 1.5rem;
    line-height: 1.9rem;

    h2 {
      margin: 0.5rem;
    }
  }
`

const ServiceCointainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  .listOne,
  .listTwo {
    z-index: 3;
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

const FiberImageContainerNew = styled(motion.div)`
  height: 100%;
  width: 100vw;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
  background-image: linear-gradient(to bottom left, #217bc5, #282828);
  img {
    object-fit: cover;
    width: 100vw;
    position: fixed;
    right: 0;
    top: 0;
    opacity: 0.3;
    /*   mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    ); */

    /* mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    ); */
  }
`

const FiberImageContainer = styled(motion.div)`
  img {
    object-fit: cover;
    width: 100vw;
    min-height: 40rem;
    max-height: 60rem;
    height: 20%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    );
  }
`

const ServicesWrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 1rem auto;
  h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-family: "AllertaStencil";
    font-weight: lighter;
    font-size: 3rem;
  }
`

const ServiceMainContainer = styled(motion.div)`
  position: relative;
  /* height: 100vh; */
  width: 100vw;
`
