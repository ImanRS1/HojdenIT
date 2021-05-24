import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function CableTwo() {
  return (
    <CablesContainer>
      <svg
        width="900"
        height="800"
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="13"
      >
        <g id="Layer_1">
          <title>Layer 1</title>
          <motion.path
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            id="svg_3"
            /* d="m129.84923,503.63497c-40.04119,0 -40.09663,0.25079 -40.75856,-0.90908c-0.66193,-1.15988 0.75868,-361.2798 0,-361.81718c0,0.50316 114.79564,0.90909 767.54403,0" */
            d="m129.84923,503.63497c-40.04119,0 -40.09663,0.25079 -40.75856,-0.90908c-0.66193,-1.15988 -2.91777,-356.11347 -1.53847,-361.81718c1.37931,-5.70372 516.33411,0.90909 777.0825,0"
            opacity="NaN"
            stroke="#ffffff"
            fill="none"
          />
        </g>
      </svg>
    </CablesContainer>
  )
}

const CablesContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: -35.5rem;
  height: 50rem;
  width: 40rem;
  transform: scale(1.2);
`
