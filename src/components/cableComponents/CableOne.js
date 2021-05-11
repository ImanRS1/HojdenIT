import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function CableOne() {
  return (
    <CablesContainer>
      <svg
        width="651"
        height="700"
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="10"
        viewBox="0 0 400 800"
        preserveAspectRatio="xMidYMid meet"
      >
        <g id="Layer_1">
          <title>Layer 1</title>
          <motion.path
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 2, delay: 1 }}
            stroke="#ffffff"
            id="svg_6"
            d="m-40.53046,657.75124c480.21387,17.90852 593.93781,-150.98475 354.21387,-310.55727c-239.72394,-159.57252 173.32424,-331.89666 344.81659,-331.60349"
            opacity="NaN"
            fill="none"
          />
        </g>
      </svg>
    </CablesContainer>
  )
}

const CablesContainer = styled.div`
  position: absolute;
  right: 0rem;
  bottom: 1rem;
`
