import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import CountUp from "./CountUpNumber"
import { scrollReveal } from "../animations"
import { useScroll } from "../components/useScroll"

export default function AboutUs() {
  const [element, controls, view] = useScroll()
  return (
    <AboutWrapper variants={scrollReveal} ref={element} animate={controls}>
      <h1>HÖJDÉNIT</h1>
      <AboutContainer>
        <CountUp render={view} />
        <div className="textContainer">
          <p>
            Med passion för service och installation leverarar HöjdénIT
            helhetslösningar inom fiber och coax till våra kunder inom Stockholm
            och Mälardalsområdet.
          </p>
          <p>
            I takt med högre krav på internetkapacitet och nyteknik ser vi våra
            kunders behov av en tillförlitlig och sakkunnig entrepenör.
            <p>
              Därför tar vi på HöjdénIT kontinuerliga steg för att bibehålla vår
              ledande kompetens och kunskap om de senaste lösningarna inom
              området.
            </p>
          </p>
          <p>
            Som en aktör med över 10 års erfarenhet inom branchen har vi skapat
            WAN och LAN lösningar med kapacitet som passar allt från
            privatpersoner till bostadsrättsföreningar och företag.
          </p>
          <p></p>
        </div>
      </AboutContainer>
    </AboutWrapper>
  )
}

const AboutContainer = styled(motion.div)`
  display: flex;

  @media all and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

    @media all and (max-width: 1000px) {
      p {
        font-size: 1.2rem;
      }
    }

    @media all and (max-width: 850px) {
      height: auto;
      width: auto;
      margin: 1rem;
    }

    @media all and (max-width: 700px) {
      text-align: center;
    }
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
