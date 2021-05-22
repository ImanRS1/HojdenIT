import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import companyLogo from "../images/HöjdenLogo.svg"
import cardImage from "../images/placeholder7.jpg"

export default function Contact() {
  return (
    <ContactContainer>
      <ContactWrapper>
        <h1>KONTAKT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et
          ex corporis sequi sed nam quas eius saepe exercitationem provident?
        </p>
        <div className="contactDetails">
          <div className="detailsText">
            <ul>
              <li>
                <span className="boldDetail">Telefonnummer:</span> 073 154 89 62
              </li>
              <li>
                <span className="boldDetail">Öppettider:</span> Mon-Lör 08:00 -
                18:00{" "}
              </li>
              <li>
                <span className="boldDetail">E-mail:</span> hojdenIT@outlook.com{" "}
              </li>
            </ul>
          </div>
          <div className="detailsLogo">
            <img src={companyLogo} />
            <p>HöjdenIT</p>
          </div>
        </div>
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

  .contactDetails {
    width: 100%;
    height: 20rem;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
  }

  .detailsText {
    li {
      margin-left: 2rem;
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
`
const ContactContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  min-height: 50rem;
`
