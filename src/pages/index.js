import React from "react"
import styled from "styled-components"
import LandingPage from "../components/LandingPage"
import Navbar from "../components/Navbar"
import global from "../styles/global.css"

export default function Home() {
  return (
    <MainWrapper>
      <Navbar />
      <LandingPage />
      <MainContainer>
        HöjdenIT
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe id
          minima vel in aliquid eaque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          deserunt fugiat, quam harum quas, explicabo quaerat assumenda
          cupiditate cumque delectus non animi, natus maiores iure sint magni
          suscipit aperiam consequuntur aut. Eos fugiat error molestiae nulla,
          esse ipsa modi mollitia cupiditate culpa, nemo omnis porro eum aliquid
          ut provident animi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          deserunt fugiat, quam harum quas, explicabo quaerat assumenda
          cupiditate cumque delectus non animi, natus maiores iure sint magni
          suscipit aperiam consequuntur aut. Eos fugiat error molestiae nulla,
          esse ipsa modi mollitia cupiditate culpa, nemo omnis porro eum aliquid
          ut provident animi.
        </p>
      </MainContainer>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  /* background-color: #282828; */
  background-image: linear-gradient(to bottom left, #2599f8, #282828);
  height: 100%;
  width: 100%;
`

const MainContainer = styled.div`
  max-width: 1200px;
  color: white;
  margin: 0 auto;
  min-height: 600px;
`
