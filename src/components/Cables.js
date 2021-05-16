import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import switchBoardSvg from "../images/svgs/2switchboard.svg"
import cableOne from "../images/svgs/1path.svg"
import boardColor from "../images/svgs/3switchboardColor.svg"
import CableOne from "./cableComponents/CableOne"
import SwitchBoard from "./cableComponents/SwitchBoard"
import SwitchColor from "./cableComponents/SwitchColor"
import SwitchGapColor from "./cableComponents/SwtichGapColor"
import CableTwo from "./cableComponents/CableTwo"
import CableStart from "./cableComponents/CableStart"
import CableConnection from "./cableComponents/CableConnection"

export default function Cables() {
  return (
    <CablesContainer>
      <CableStart />
      <CableOne className="cableOne" />
      <SwitchBoardContainer
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <SwitchBoard />
        <SwitchColor />
        <SwitchGapColor />
      </SwitchBoardContainer>
      <CableTwo />
      <CableConnection/>
    </CablesContainer>
  )
}

const SwitchBoardContainer = styled(motion.div)``

const CablesContainer = styled.div`
  margin: 0 auto;
  max-width: 1800px;
  transform: scale(0.9);

  /*   .sBoard {
    position: absolute;
    right: 20rem;
    bottom: 3rem;
    img {
      width: 25rem;
    }
  }

  .cableOne {
    position: absolute;
    right: 0;
    top: 8.7rem;
    img {
      width: 24.8rem;
    }
  }

  .sColor {
    position: absolute;
    right: 20rem;
    bottom: 3rem;
    img {
      width: 25rem;
    } */
  /*  } */
`
