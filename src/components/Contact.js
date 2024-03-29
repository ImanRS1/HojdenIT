import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import companyLogo from "../images/HöjdenLogo.svg"
import cardImage from "../images/placeholder7.jpg"
import { scrollReveal } from "../animations"
import { useScroll } from "../components/useScroll"

export default function Contact() {
  const [element, controls] = useScroll()
  return (
    <ContactContainer>
      <ContactWrapper variants={scrollReveal} ref={element} animate={controls}>
        <h1>KONTAKT</h1>
        <p>
          För information och offertförfrågningar kring våra tjänster är ni
          varmt välkomna att kontakta oss via mail eller telefon.
        </p>
        <div className="contactDetails">
          <div className="detailsText">
            <ul>
              <li>
                <span className="boldDetail">Telefonnummer:</span> 073 896 70 78
              </li>
              <li>
                <span className="boldDetail">Öppettider:</span> Mon-Lör 08:00 -
                18:00
              </li>
              <li>
                <span className="boldDetail">E-mail:</span> HojdenIT@outlook.com
              </li>
            </ul>
            <div className="mobileLogo">
              <img src={companyLogo} alt="Company Logo" />
            </div>
          </div>
          <div className="detailsLogo" alt="Details Logo">
            <img src={companyLogo} alt='Logo of the company'/>
            <p>HöjdénIT</p>
          </div>
        </div>
      </ContactWrapper>
      <CardImageContainer>
        <img src={cardImage} className="CardImage" alt="Communication cards" />
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
      rgba(0, 0, 0, 0.1),
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
    padding-top: 1rem;
    text-align: center;
    font-family: "AllertaStencil";
    font-weight: lighter;
    font-size: 3rem;
  }

  p {
    font-family: "UbuntuLight";
    font-size: 1.5rem;
    line-height: 1.9rem;
    z-index: 1;
    position: relative;
    margin-bottom: 0.5rem;
  }

  .contactDetails {
    width: 100%;
    height: 20rem;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
  }

  .detailsText {
    li {
      list-style: none;
      font-family: "UbuntuLight";
      font-size: 1.5rem;
      line-height: 1.9rem;
      z-index: 1;
      position: relative;
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
    }

    .boldDetail {
      font-weight: bolder;
    }

    .mobileLogo {
      display: none;
    }
  }
  .detailsLogo {
    position: relative;
    margin-right: 6rem;
    img {
      height: 25rem;
    }
    p {
      font-family: "AllertaStencil";
      position: absolute;
      top: 50%;
      right: -15%;
      font-size: 3.5rem;
    }
  }

  @media all and (max-width: 1245px) {
    padding: 1rem;
  }

  @media all and (max-width: 867px) {
    .detailsLogo {
      display: none;
    }

    .detailsText {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .mobileLogo {
        display: block;
        position: absolute;
        opacity: 0.5;
      }
    }

    p {
      margin: 0.5rem;
    }
  }

  @media all and (max-width: 600px) {
    .mobileLogo {
      img {
        width: 80%;
        margin-top: 2rem;
      }
    }
  }
`
const ContactContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  min-height: 45rem;
`
