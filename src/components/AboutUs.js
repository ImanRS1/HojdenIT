import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import CountUp from "./CountUpNumber"
import coaxImage from "../images/placeholder11.png"
import CableThree from "../components/cableComponents/CableThree"
import {scrollReveal} from "../animations"
import {useScroll} from "../components/useScroll"

export default function AboutUs() {

  const [element, controls, view] = useScroll();
  return (
    <AboutWrapper variants={scrollReveal} ref={element} animate={controls}>
      <h1>HÖJDENIT</h1>
      <AboutContainer>
        <CountUp />
        <div className="textContainer">
          <img src={coaxImage} className="coaxImage" />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe id
            minima vel in aliquid eaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            deserunt fugiat, quam harum quas, explicabo quaerat assumenda
            cupiditate cumque delectus non animi, natus maiores iure sint magni
            suscipit aperiam consequuntur aut. Eos fugiat error molestiae nulla,
            esse ipsa modi mollitia cupiditate culpa, nemo omnis porro eum
            aliquid ut provident animi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            deserunt fugiat, quam harum quas, explicabo quaerat assumenda
            cupiditate cumque delectus non animi, natus maiores iure sint magni
            suscipit aperiam consequuntur aut. Eos fugiat error molestiae nulla,
            esse ipsa modi mollitia cupiditate culpa, nemo omnis porro eum
            aliquid ut provident animi.
          </p>
        </div>
      </AboutContainer>
      <CableThree render={view}/>
    </AboutWrapper>
  )
}

const AboutContainer = styled(motion.div)`
  display: flex;

  p {
    font-family: "UbuntuLight";
    font-size: 1.5rem;
    line-height: 1.9rem;
    z-index: 1;
    position: relative;
    margin-bottom: 0.5rem;
  }

  .textContainer {
    height: 30rem;
    width: 50rem;
  }

  .coaxImage {
    position: absolute;
    width: 25rem;
    left: 0rem;
    opacity: 0.8;
    z-index: 0;

    -webkit-mask-image: -webkit-gradient(
      linear,
      right top,
      from(rgba(0, 0, 0, 0.7)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  }
`

const AboutWrapper = styled(motion.div)`
  margin-top: 7rem;
  max-width: 1200px;
  position: relative;
  h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-family: "AllertaStencil";
    font-weight: lighter;
    font-size: 3rem;
    letter-spacing: 0.5rem;
  }
`
