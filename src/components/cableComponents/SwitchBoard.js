import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function SwitchBoard() {
  return (
    <SwitchBoardContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 1 }}
    >
      <svg
        /* width="307.12088012695312"
        height="290.83515930175781" */
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>my vector image</title>
        <g class="currentLayer">
          <title>Layer 1</title>
          <path
            d="m423.26595,170.08792"
            id="svg_2"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="6"
            stroke="#ffffff"
            fill="none"
          />
          <path
            d="m811.17805,91.51649"
            id="svg_5"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#222222"
            fill="#000000"
          />
          <path
            d="m531.50771,115.14286"
            id="svg_3"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#ffffff"
            fill="#ffffff"
          />
          <path
            d="m818.32091,84.92308"
            id="svg_4"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#ffffff"
            fill="#ffffff"
          />
          <rect
            height="55.47126"
            width="160.12575"
            y="18.142"
            x="21.81514"
            id="svg_7"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_6"
            d="m82.11209,19.0989l0,54.39561"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_13"
            d="m63.1011,18.76923l0,53.84616"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_14"
            d="m42.99121,18.98902l0,54.3956"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_15"
            d="m120.68354,18.65933l0,54.39561"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_16"
            d="m160.46378,18.87912l0,53.84616"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_11"
            d="m140.02418,18.21978l0,54.3956"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_12"
            d="m101.23296,18.43953l0,54.39561"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_26"
            d="m45.36263,24.32965c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_9"
            d="m45.91208,67.73624c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_17"
            d="m54.37361,24.54944c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_18"
            d="m65.5824,24.76922c0,-1.65746 1.34255,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65745,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_19"
            d="m74.04394,24.43955c0,-1.65745 1.34254,-3 3,-3c1.65746,0 3,1.34255 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_20"
            d="m84.70327,24.65934c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_21"
            d="m93.16481,24.87911c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_22"
            d="m103.82414,24.54942c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_23"
            d="m112.28565,24.7692c0,-1.65745 1.34254,-3 3,-3c1.65746,0 3,1.34255 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_25"
            d="m122.94497,24.43952c0,-1.65745 1.34254,-3 3,-3c1.65746,0 3,1.34255 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_28"
            d="m131.4065,24.65928c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_29"
            d="m142.06583,24.3296c0,-1.65746 1.34254,-3 3,-3c1.65745,0 3,1.34254 3,3c0,1.65746 -1.34255,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_30"
            d="m151.07681,24.54936c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65745 -1.34254,3 -3,3c-1.65746,0 -3,-1.34255 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_31"
            d="m163.93394,24.76911c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_45"
            d="m34.37362,24.8791c0,-1.65746 1.34254,-3 3,-3c1.65745,0 3,1.34254 3,3c0,1.65746 -1.34255,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_46"
            d="m25.80219,25.09888c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_27"
            d="m54.37361,67.40658c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_32"
            d="m65.5824,67.62636c0,-1.65746 1.34255,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65745,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_33"
            d="m74.04394,67.2967c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_34"
            d="m84.70327,67.51648c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_35"
            d="m93.16481,67.73625c0,-1.65745 1.34254,-3 3,-3c1.65746,0 3,1.34255 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_36"
            d="m103.82414,67.40656c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_37"
            d="m112.28565,67.62635c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_38"
            d="m122.94497,67.29667c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_39"
            d="m131.4065,67.51642c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_40"
            d="m142.61528,67.18674c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_41"
            d="m151.07681,67.4065c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_42"
            d="m164.48339,67.62626c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65745 -1.34254,3 -3,3c-1.65746,0 -3,-1.34255 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_43"
            d="m172.94491,24.43944c0,-1.65745 1.34254,-3 3,-3c1.65746,0 3,1.34255 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_47"
            d="m173.49436,67.29659c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65745 -1.34254,3 -3,3c-1.65746,0 -3,-1.34255 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_24"
            d="m34.37362,67.73624c0,-1.65746 1.34254,-3 3,-3c1.65745,0 3,1.34254 3,3c0,1.65746 -1.34255,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_8"
            d="m25.80219,67.40657c0,-1.65746 1.34254,-3 3,-3c1.65746,0 3,1.34254 3,3c0,1.65746 -1.34254,3 -3,3c-1.65746,0 -3,-1.34254 -3,-3z"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_48"
            d="m17.91795,39.79487l165.38462,0"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#222222"
            fill="#dadada"
          />
          <rect
            ry="3"
            rx="3"
            height="27.79121"
            width="168.61536"
            y="32.89008"
            x="17.37358"
            id="svg_54"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
          <line
            y2="34.48352"
            x2="33.85201"
            y1="34.48352"
            x1="33.85201"
            id="svg_51"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke="#242424"
            fill="#ffffff"
          />
          <line
            y2="34.66666"
            x2="112.42345"
            y1="34.66666"
            x1="112.42345"
            id="svg_66"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke="#242424"
            fill="#ffffff"
          />
          <path
            id="svg_70"
            d="m179.63956,37.41391l-156.59341,0"
            fill-rule="nonzero"
            stroke-linejoin="round"
            stroke-dasharray="5,5"
            stroke-width="2"
            stroke="#242424"
            fill="#ffffff"
          />
        </g>
      </svg>
    </SwitchBoardContainer>
  )
}

const SwitchBoardContainer = styled(motion.div)`
  position: absolute;
  right: 11rem;
  bottom: -15rem;
  height: auto;
  width: 50rem;
  overflow: hidden;
`
