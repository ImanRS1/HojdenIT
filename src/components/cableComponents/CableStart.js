import React from "react"
import styled from "styled-components"

export default function CableStart() {
  return (
    <CablesContainer>
      <svg width="65" height="105" xmlns="http://www.w3.org/2000/svg">
        <g id="Layer_1">
          <title>Layer 1</title>
          <line
            stroke-width="13"
            stroke-linecap="undefined"
            stroke-linejoin="undefined"
            id="svg_1"
            y2="85.53278"
            x2="33.5"
            y1="24.5"
            x1="33.5"
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
  right: -2rem;
  bottom: 41.7rem;
  transform: scale(1.2);
`
