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

//{<motion.svg
/* width = "169.70329658237426" */
/* height = "289.9010988607914" */
/*   viewBox="0 0 1440 600" */
/* xmlns = "http://www.w3.org/2000/svg" */
//>
/*<g class="currentLayer">
      <title>Layer 1</title>

      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 5 }}
        d="m172.51871,2c-196.15385,54.94506 -138.8396,120.26371 -123.26595,138.15384c15.57364,17.89012 77.1121,69.53848 50.73848,108.00002c-26.37363,38.46153 -64.66378,35.09889 -84.80443,35.95603c-20.14065,0.85714 5.1341,-0.24175 -16.48351,0"
        id="svg_10"
        fill-rule="nonzero"
        stroke-linejoin="round"
        stroke-width="10"
        stroke="#ffffff"
        fill="none"
      />
    </g>
  </motion.svg>} */
