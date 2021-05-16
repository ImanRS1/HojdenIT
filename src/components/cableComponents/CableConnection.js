import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function CableConnection() {
  return (
    <CableContainer>
      <svg xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <line
            id="svg_6"
            y2="62.98601"
            x2="122.28312"
            y1="38.97683"
            x1="122.28312"
            stroke="#ffffff"
            fill="none"
          />
          <line
            stroke="#ffffff"
            id="svg_9"
            y2="62.52647"
            x2="130.49788"
            y1="38.68844"
            x1="130.49788"
            fill="none"
          />
          <line
            stroke="#ffffff"
            id="svg_10"
            y2="62.5239"
            x2="127.38826"
            y1="38.65004"
            x1="127.38826"
            fill="none"
          />
          <rect
            stroke="#b5b5b5"
            id="svg_14"
            height="22.28705"
            width="25.00944"
            y="39.30966"
            x="30.59222"
            fill="#fff"
          />
          <rect
            id="svg_15"
            height="5.29196"
            width="18.97807"
            y="94.59208"
            x="70.6214"
            stroke="#c6c6c6"
            fill="#fff"
          />
          <rect
            stroke="#c4c4c4"
            rx="5"
            id="svg_2"
            height="40.68293"
            width="27.86078"
            y="57.12004"
            x="66.20394"
            fill="#fff"
          />
          <line
            stroke="#ffffff"
            id="svg_17"
            y2="62.62036"
            x2="133.70791"
            y1="38.78233"
            x1="133.70791"
            fill="none"
          />
          <rect
            stroke="#d8d8d8"
            rx="3"
            id="svg_1"
            height="16.2439"
            width="94.37425"
            y="42.51358"
            x="45.00018"
            fill="#fff"
          />
          <rect
            id="svg_13"
            height="23.69021"
            width="5.46697"
            y="38.81968"
            x="118.36036"
            stroke="#c9c9c9"
            fill="#fff"
          />
          <rect
            stroke="#bcbcbc"
            rx="3"
            id="svg_4"
            height="27.68204"
            width="88.71501"
            y="36.40383"
            x="32.86612"
            fill="#fff"
          />
        </g>
      </svg>
    </CableContainer>
  )
}

const CableContainer = styled.div`
  position: absolute;
  left: 3.7rem;
  bottom: -35.15rem;
  height: 20rem;
  width: 20rem;
`
