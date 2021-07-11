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
    if(view.render){
      setTimeout(function () {
        createCounter()
      }, 500)
    }
   
  }
  return (
    <CountHolder>
      <img src={coaxImage} className="coaxImage" />
      <h2>Mer än</h2>
      <div className="numberHolder">
        <h2 id="targetElement" onLoad={startCounter()} className="targetCount">
          -
        </h2>
      </div>
      <h2>Framgångsrikt utförda uppdrag</h2>
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
`
