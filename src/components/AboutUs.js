import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import CountUp from "./CountUpNumber"
import coaxImage2 from "../images/placeholder11.png"
import coaxImage from "../images/coaxCable.png"
import CableThree from "../components/cableComponents/CableThree"
import {scrollReveal} from "../animations"
import {useScroll} from "../components/useScroll"

export default function AboutUs() {

  const [element, controls, view] = useScroll();
  return (
    <AboutWrapper variants={scrollReveal} ref={element} animate={controls}>
      <h1>HÖJDÉNIT</h1>
      <AboutContainer>
        <CountUp render={view}/>
        <div className="textContainer">
          <img src={coaxImage} className="coaxImage" />

          <p>
            Med passion för service och installation leverarar HöjdénIT helhetslösningar inom fiber och coax till våra kunder inom Stockholm och Mälardalsområdet.
            
            
          </p>
          <p>
            I takt med högre krav på internetkapacitet och nyteknik ser vi våra kunders behov av en tillförlitlig och sakkunnig entrepenör.           
            <p>
            Därför tar vi på HöjdénIT kontinuerliga steg för att bibehålla vår ledande kompetens och kunskap om de senaste lösningarna inom området.
            </p>
            
          </p>
          <p>
            Som en aktör med över 10 års erfarenhet inom branchen har vi skapat WAN och LAN lösningar med kapacitet som passar allt från privatpersoner till bostadsrättsföreningar och företag.
          </p>
          <p>
          </p>
        </div>
      </AboutContainer>
      {/* <CableThree render={view}/> */}
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
    margin-right: 0.5rem;
  }

  .textContainer {
    height: 30rem;
    width: 50rem;

    @media all and (max-width: 1000px){
      p{
        font-size: 1.2rem;
      }
      
    }
  }

  .coaxImage {
    position: absolute;
    width: 27rem;
    left: 0rem;
    opacity: 0.8;
    z-index: 0;

    -webkit-mask-image: -webkit-gradient(
      linear,
      right top,
      from(rgba(0, 0, 0, 0.7)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1),  rgba(0, 0, 0, 0));
  }
`

const AboutWrapper = styled(motion.div)`
  margin-top: 7rem;
  max-width: 1200px;
  position: relative;
  z-index: 3;
  padding-bottom: 2rem;
  h1 {
    margin-bottom: 2rem;
    text-align: center;
    font-family: "AllertaStencil";
    font-weight: lighter;
    font-size: 3rem;
    letter-spacing: 0.5rem;
  }
`
