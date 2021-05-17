import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function SwitchColor() {
  return (
    <ColorContainer>
      <svg
        /*  width="207.12088012695312"
        height="90.83515930175781" */
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 190 80"
        preserveAspectRatio="xMidYMid meet"
        stroke-width="13"
      >
        <title>my vector image</title>
        <g class="currentLayer">
          <title>Layer 1</title>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            id="svg_87"
            d="m179.82269,48.03663l-155.04397,-0.54946"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke="#990000"
            fill="#dadada"
          />
        </g>

        <g class="currentLayer">
          <title>Layer 1</title>
          <motion.path
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            transform="rotate(180 101.801 47.7619)"
            fill="#dadada"
            stroke="#00bf00"
            stroke-width="13"
            stroke-linejoin="round"
            fill-rule="nonzero"
            d="m179.82269,48.03663l-156.04397,-0.54946"
            id="svg_87"
          />
        </g>
      </svg>
    </ColorContainer>
  )
}

const ColorContainer = styled.div`
  position: absolute;
  right: 31.2rem;
  bottom: 6.5em;
  overflow: hidden;
  width: 30rem;
  height: 10rem;
  z-index: 3;
`
