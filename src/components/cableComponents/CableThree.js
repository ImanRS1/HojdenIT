import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function CableThree(view) {
 /*  console.log(view.render) */
  if(view.render === true){
    console.log("ja nu")
  }
  return (
    <CableContainer>
      <svg xmlns="http://www.w3.org/2000/svg" stroke-width="11">
        <g id="Layer_1">
          <title>Layer 1</title>
          <motion.path
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 0.5, delay: 3.7 }}
            id="svg_2"
            d="m156.5,123.5c-138.09055,0 -111.71989,-0.71989 -140,-1c-5.28011,-2.28011 -3,-9 -3,-80"
            opacity="NaN"
            stroke="#ffffff"
            fill="none"
          />
        </g>
      </svg>
    </CableContainer>
  )
}

const CableContainer = styled.div`
  position: absolute;
  left: -2.3rem;
  bottom: 5.5rem;
  height: 20rem;
  width: 40rem;
  transform: scale(1.2);
`
