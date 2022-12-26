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
          <h1>
            Purely
            <br />
            <span>Green</span>
          </h1>
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

  &::after {
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); // black overlay for text to be readable
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
`

const HeroTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  transform: translate(-50%, -50%);

  .hero-text {
    h1 {
      color: #fff;
      font-size: 40px;
      text-align: left;
      text-transform: lowercase;
      font-size: clamp(40px, 16vw, 132px);
      max-width: 300px;
      padding: 0;
      margin: 0;
      margin-top: 12px;
      margin-bottom: 12px;
      font-family: "Inter", sans-serif;
      font-weight: 600;

      span {
        color: #62c980;
      }
    }
  }
`

export default Hero
