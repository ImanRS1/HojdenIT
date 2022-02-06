import { CountUp } from "countup.js"
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import coaxImage from "../images/coaxCable.png"

export default function CountUpNumber(view) {
  const createCounter = () => {
    const options = {
      duration: 3.2,
      separator: "",
    }
    let demo = new CountUp("targetElement", 1417, options)
    if (!demo.error) {
      demo.start()
    } else {
      console.error(demo.error)
    }
  }

  const startCounter = () => {
    if (view.render) {
      setTimeout(function () {
        createCounter()
      }, 500)
    }
  }
  return (
    <CountHolder>
      <div className="coaxImageContainer">
        <img src={coaxImage} className="coaxImage" alt="coaxial cables" />
      </div>
      <div className="countContent">
        <div className="leftContent">
          <h2>Mer än</h2>
          <div className="numberHolder">
            <h2
              id="targetElement"
              onLoad={startCounter()}
              className="targetCount"
            >
              -
            </h2>
          </div>
        </div>
        <div className="rightContent">
          <h2>Framgångsrikt utförda uppdrag</h2>
        </div>
      </div>
    </CountHolder>
  )
}

const CountHolder = styled(motion.div)`
  font-family: "AllertaStencil";
  margin: 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 20rem;
  text-align: center;
  border: 15px solid white;
  border-radius: 1rem;
  z-index: 2;
  padding: 0.5rem;

  .countContent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media all and (max-width: 850px) {
    width: 15rem;
    height: auto;
    border: 8px solid white;
  }

  .numberHolder {
    display: flex;
  }
  .targetCount {
    font-size: 4rem;
  }
  h2 {
    margin: 0.5rem;
    padding-left: 0.5rem;
    font-size: 2rem;
    font-weight: lighter;
  }

  .coaxImageContainer {
    position: relative;
    height: 1%;
    width: 100%;
    z-index: 0;
  }
  .coaxImage {
    position: absolute;
    width: 20rem;
    top: 5rem;
    left: -20%;
    opacity: 0.8;
    z-index: 0;

    -webkit-mask-image: -webkit-gradient(
      linear,
      right top,
      from(rgba(0, 0, 0, 0.7)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
  }

  @media all and (max-width: 850px){
    .coaxImage{
      top: 0rem;
      left: -2rem;
    }
  }
`
