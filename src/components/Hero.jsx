import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Hero() {
  return (
    <HeroContainer>
      <StaticImage
        src="../assets/images/hero-mobile.svg"
        alt="Purely Green performing on stage"
        className="hero-img mobile"
        placeholder="blurred"
        layout="fullWidth"
      />

      {/* <StaticImage
        src="../assets/images/hero-desktop.svg"
        alt="Purely Green preforming on stage"
        className="hero-img desktop"
        placeholder="tracedSVG"
        layout="fullWidth"
      /> */}

      <HeroTextContainer>
        <div className="hero-text">
          <h1>Purely Green</h1>
        </div>
      </HeroTextContainer>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  height: 100vh;
  position: relative;
  .hero-img {
    height: 100%;
    width: 100%;
    &.mobile {
      display: none;
    }
    &.desktop {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    .hero-img {
      &.mobile {
        display: block;
      }
      &.desktop {
        display: none;
      }
    }
  }
`

const HeroTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  .hero-text {
    color: #fff;
    h1 {
      font-size: 40px;
      text-align: left;
      text-transform: uppercase;
      font-size: clamp(22px, 10vw, 128px);
      max-width: 300px;
      padding: 0;
      margin: 0;
      margin-top: 12px;
      margin-bottom: 12px;
    }
    h4 {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 300;
      line-height: 24px;
      font-size: clamp(14px, 2vw, 24px);
    }
    h2 {
      margin: 0;
      padding: 0;
      font-family: "Exo", sans-serif;
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 300;
      line-height: 24px;
      font-size: clamp(14px, 2vw, 24px);
    }
  }
`

export default Hero
