import { CountUp } from "countup.js"
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function CountUpNumber() {
  const createCounter = () => {
    const options = {
      duration: 6.2,
    }
    let demo = new CountUp("targetElement", 417, options)
    if (!demo.error) {
      demo.start()
    } else {
      console.error(demo.error)
    }
  }

  const startCounter = () => {
    setTimeout(function () {
      createCounter()
    }, 500)
  }
  return (
    <CountHolder>
      <h1 id="targetElement" onLoad={startCounter()}>
        0
      </h1>
    </CountHolder>
  )
}

const CountHolder = styled(motion.div)`
  margin: 1rem;
`
