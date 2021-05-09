import React from "react"
import styled from "styled-components"
import backGImage from "../images/placeholder3.jpg"

export default function LandingPage() {
  return (
    <div>
      <LandingPageWrapper>
        <BackGImage>
          <img src={backGImage} />
        </BackGImage>
      </LandingPageWrapper>
    </div>
  )
}

const BackGImage = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  img {
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.7)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    );
  }
`

const LandingPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`
