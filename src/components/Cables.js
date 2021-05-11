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

export default function Cables() {
  return (
    <CablesContainer>
      <CableOne />

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

      {/*  <div className="cableOne">
        <img src={cableOne} />
      </div>
      <div className="sBoard">
        <img src={switchBoardSvg} />
      </div>
      <div className="sColor">
        <img src={boardColor} />
      </div> */}
    </CablesContainer>
  )
}

const SwitchBoardContainer = styled(motion.div)``

const CablesContainer = styled.div`
/* height: 100vh;
max-width: 1800px;
background-color: teal; */
  .sBoard {
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
    }
  }
`
