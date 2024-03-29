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
import circuitBreakers from "../images/placeholder1.jpg"

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
          <ServiceObject>
            <img src={socketImage} alt='Offered service' />

            <div className="textContainer">
              <h2>Vägguttag</h2>
              <p>
                Felsökning, installation och uppgradering av vägguttag. Installation av dimmers, etc.
              </p>
            </div>
          </ServiceObject>
          <ServiceObject>
            <img src={fiberCables} alt='Offered service'/>

            <div className="textContainer">
              <h2>Fiberoptik</h2>
              <p>
                Installation och reparation av fiberoptik. Felsökning av kommunikationskort.
              </p>
            </div>
          </ServiceObject>

          <ServiceObject>
            <img src={oneExpert} alt='Offered service'/>

            <div className="textContainer">
              <h2>Nätverksprestanda</h2>
              <p>
                Verifiering av nätverksprestanda, felsökning, upptäckt av signalstörningar.
              </p>
            </div>
          </ServiceObject>
          <ServiceObject>
            <img src={coaxImage} alt='Offered service'/>

            <div className="textContainer">
              <h2>Koaxialkablar</h2>
              <p>
                Installation, service och felsökning av koaxiala kablar. Upprättning av digitalTV.
              </p>
            </div>
          </ServiceObject>

          <ServiceObject>
            <img src={circuitBreakers} alt='Offered service'/>

            <div className="textContainer">
              <h2>Automatsäkringar</h2>
              <p>
                Installation av jordfelsbrytare och automatsäkringar, felsökning och modifieringar.
              </p>
            </div>
          </ServiceObject>
          <ServiceObject>
            <img src={coaxImage} alt='Offered service'/>

            <div className="textContainer">
              <h2>Header</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                repellendus?
              </p>
            </div>
          </ServiceObject>

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
        <img src={fiberImage} className="fiberImage" alt='Fiber optics'/>
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
  box-shadow: rgba(0, 0, 0, 0.55) -15px 15px 15px;

  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;

  &:hover {
    background-color: rgba(40, 40, 40);
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
    box-shadow: rgba(0, 0, 0, 0.75) -15px 15px 15px;
  }

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

  @media all and (max-width: 1150px) {
    margin: 1rem;
    height: 20rem;
    width: 35rem;
  }

  @media all and (max-width: 850px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media all and (max-width: 700px) {
    width: 80%;
    box-sizing: border-box;
    .textContainer {
      h2 {
        margin-top: 0rem;
      }
    }
  }

  @media all and (max-width: 650px) {
    height: 25rem;
  }

  @media all and (max-width: 380px) {
    min-height: 30rem;
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

  @media all and (max-width: 1150px) {
    flex-direction: column;
  }
`

const FiberImageContainerNew = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
  background-image: linear-gradient(to bottom left, #217bc5, #282828);
  img {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
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
