import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function LoadingCircle() {
  return (
    <CircleHolder>
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <ellipse
            stroke-width="12"
            ry="164"
            rx="164"
            id="svg_1"
            cy="296"
            cx="416"
            stroke="#000"
            fill="none"
          />
        </g>
      </svg>
    </CircleHolder>
  )
}

const CircleHolder = styled(motion.div)`
  position: absolute;
  width: 50rem;
`
