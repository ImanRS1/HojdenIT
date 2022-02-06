import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function LoadingCircle() {
  return (
    <CircleHolder>
      <svg
        strokeWidth="12"
        width="800"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Layer 1</title>
          <motion.path
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 1 }}
            d="m682.5,329.5c-1,-115 -92,-227 -233.5,-223.5c-141.5,3.5 -229.5,115.5 -229,233c0.5,117.5 86.5,223.5 230,224c143.5,0.5 233.5,-118.5 232.5,-233.5z"
            stroke="#fefefe"
            fill="none"
          />
        </g>
      </svg>
    </CircleHolder>
  )
}

const CircleHolder = styled(motion.div)`
  position: absolute;
  transform: scale(0.9);
  margin-left: 6rem;
  margin-bottom: 4rem;
  svg {
    transform: rotate(90deg);
  }
`
