import React, { useState, useEffect } from "react"
import styled from "styled-components"
import companyLogo from "../images/HöjdenLogo.svg"
import "../styles/typography.css"
import { motion, useViewportScroll } from "framer-motion"
import {
  fadeIn,
  fadeInFromRight,
  fadeOutNav,
  displayNoneNav,
} from "../animations"
import { Link, animateScroll as scroll } from "react-scroll"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  const [tabletView, setTabletView] = useState(false)
  const [burgerClicker, setBurgerClicker] = useState(false)
  const [mobileViewSmall, setMobileViewSmall] = useState(false)
  const windowWidth = window.innerWidth

  const imgVariant = mobileView
    ? {
        scrolled: { height: "6rem" },
        notScrolled: { height: "7rem" },
      }
    : {
        scrolled: { height: "7rem" },
        notScrolled: { height: "12rem" },
      }

  const navVariant = {
    scrolled: { background: "rgba(27,27,27,0.8)" },
    notScrolled: { background: "rgba(0,0,0,0)" },
  }

  const companyName = mobileView
    ? {
        scrolled: { fontSize: "1.5rem" },
        notScrolled: { fontSize: "1.6rem" },
      }
    : {
        scrolled: { fontSize: "1.8rem" },
        notScrolled: { fontSize: "3rem" },
      }

  const navListVariant = {
    scrolled: { fontSize: "1.2rem" },
    notScrolled: { fontSize: "1.5rem" },
  }

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  window.addEventListener("scroll", changeBackground)
  window.addEventListener("resize", function (event) {
    if (this.window.innerWidth <= 560) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  })

  const checkMobileView = () => {
    if (windowWidth <= 560) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  }

  setTimeout(checkMobileView, 100)

  const checkTabletView = () => {
    if (windowWidth <= 1000) {
      setTabletView(true)
    } else {
      setTabletView(false)
    }
  }

  setTimeout(checkTabletView, 100)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const burgerClick = () => {
    const menuBtn = document.querySelector(".burgerContainer")

    if (!burgerClicker) {
      menuBtn.classList.add("open")
      setBurgerClicker(true)
    } else {
      menuBtn.classList.remove("open")
      setBurgerClicker(false)
    }
  }

  return (
    <FadeWrapper animate="show" initial="hidden" variants={fadeIn}>
      <NavbarWrapper
        animate={scrolled ? "scrolled" : "notScrolled"}
        variants={navVariant}
        transition={{ duration: 0.5 }}
      >
        <NavbarContainer>
          <div className="logoContainer" onClick={scrollToTop}>
            <motion.img
              src={companyLogo}
              animate={scrolled ? "scrolled" : "notScrolled"}
              variants={imgVariant}
              transition={{ duration: 0.5 }}
              alt="Company logo"
            />
            <motion.p
              animate={scrolled ? "scrolled" : "notScrolled"}
              variants={companyName}
              transition={{ duration: 0.5 }}
            >
              HöjdénIT
            </motion.p>
          </div>

          <NavList>
            <motion.ul
              animate={scrolled ? "scrolled" : "notScrolled"}
              initial={{ fontSize: "1.2rem" }}
              variants={navListVariant}
              transition={{ duration: 0.5 }}
            >
              <li>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-280}
                  duration={500}
                >
                  <p>OM OSS</p>
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                >
                  <p>VÅRA TJÄNSTER</p>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="lastNavItem">KONTAKT</p>
                </Link>
              </li>
            </motion.ul>
          </NavList>
          <BurgerMenu onClick={burgerClick}>
            <div className="burgerContainer">
              <div className="burgerButton"></div>
            </div>
          </BurgerMenu>
        </NavbarContainer>
        {tabletView ? (
          burgerClicker ? (
            <NavListBurger>
              <motion.ul
                animate={scrolled ? "scrolled" : "notScrolled"}
                initial={{ fontSize: "1.2rem" }}
                variants={navListVariant}
                transition={{ duration: 0.5 }}
              >
                <motion.li
                  animate={"show"}
                  initial={"hidden"}
                  variants={fadeInFromRight}
                >
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={500}
                  >
                    <motion.p
                      animate={"show"}
                      initial={"hidden"}
                      variants={fadeInFromRight}
                      onClick={burgerClick}
                    >
                      OM OSS
                    </motion.p>
                  </Link>
                </motion.li>

                <motion.li
                  className="middleNavItem"
                  animate={"show"}
                  initial={"hidden"}
                  variants={fadeInFromRight}
                >
                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-135}
                    duration={500}
                  >
                    <motion.p
                      animate={"show"}
                      initial={"hidden"}
                      variants={fadeInFromRight}
                      onClick={burgerClick}
                    >
                      VÅRA TJÄNSTER
                    </motion.p>
                  </Link>
                </motion.li>
                <motion.li
                  animate={"show"}
                  initial={"hidden"}
                  variants={fadeInFromRight}
                >
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <motion.p
                      animate={"show"}
                      initial={"hidden"}
                      variants={fadeInFromRight}
                      onClick={burgerClick}
                    >
                      KONTAKT
                    </motion.p>
                  </Link>
                </motion.li>
              </motion.ul>
            </NavListBurger>
          ) : (
            <NavListBurger
              animate={"show"}
              initial={"hidden"}
              variants={displayNoneNav}
            >
              <motion.ul
                animate={scrolled ? "scrolled" : "notScrolled"}
                initial={{ fontSize: "1.2rem" }}
                variants={navListVariant}
                transition={{ duration: 0.5 }}
              >
                <motion.li
                  animate={"show"}
                  initial={"hidden"}
                  variants={fadeOutNav}
                >
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-280}
                    duration={500}
                  >
                    <p>OM OSS</p>
                  </Link>
                </motion.li>

                <motion.li
                  className="middleNavItem"
                  animate={"show"}
                  initial={"hidden"}
                  variants={fadeOutNav}
                >
                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                  >
                    <p>VÅRA TJÄNSTER</p>
                  </Link>
                </motion.li>
                <motion.li
                  animate={"show"}
                  initial={"hidden"}
                  variants={fadeOutNav}
                >
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <p>KONTAKT</p>
                  </Link>
                </motion.li>
              </motion.ul>
            </NavListBurger>
          )
        ) : (
          ""
        )}
      </NavbarWrapper>
    </FadeWrapper>
  )
}

const FadeWrapper = styled(motion.div)``

const NavbarWrapper = styled(motion.div)`
  z-index: 299;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
`

const NavbarContainer = styled(motion.div)`
  max-width: 1200px;
  position: sticky;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  img {
    height: 10rem;
  }

  .logoContainer {
    position: relative;
    p {
      font-family: "AllertaStencil";
      position: absolute;
      top: 28%;
      left: 80%;
    }

    @media all and(max-width: 1000px) {
      p {
        padding-bottom: 2rem;
      }
    }
  }

  .logoContainer:hover {
    cursor: pointer;
  }
`

const NavList = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  font-family: "AllertaStencil";
  margin-bottom: 1rem;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style: none;
  }

  .lastNavItem {
    margin-right: 1rem;
  }

  p:hover {
    cursor: pointer;
    color: #4aa0e9;
  }

  @media all and (max-width: 1000px) {
    display: none;
  }
`

const NavListBurger = styled(motion.div)`
  display: none;
  width: 100%;
  justify-content: flex-end;
  font-family: "AllertaStencil";
  margin-bottom: 1rem;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: column;
  }
  li {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0 1rem 0 0;
  }

  .middleNavItem {
    margin: 1rem;
  }

  p:hover {
    cursor: pointer;
    color: #4aa0e9;
  }

  @media all and (max-width: 1000px) {
    display: flex;
  }
`

const BurgerMenu = styled(motion.div)`
  display: none;
  .burgerContainer {
    box-sizing: border-box;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    display: flex;
    margin-bottom: 1rem;

    @media all and (max-width: 430px) {
      padding-left: 1.7rem;
      margin-bottom: 1rem;
    }
  }

  .burgerButton {
    width: 50px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }

  .burgerButton::before,
  .burgerButton::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }

  .burgerButton::before {
    transform: translateY(-16px);
  }

  .burgerButton::after {
    transform: translateY(16px);
  }

  .burgerContainer.open .burgerButton {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }

  .burgerContainer.open .burgerButton::before {
    transform: rotate(45deg) translate(35px, -35px);
  }

  .burgerContainer.open .burgerButton::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

  @media all and (max-width: 1000px) {
    display: flex;
    align-items: center;
    margin: 1rem;
  }

  @media all and (max-width: 560px) {
    margin: 0rem;
    transform: scale(0.7);
  }
`
