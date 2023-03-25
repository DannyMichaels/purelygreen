import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link } from "gatsby"

function Footer() {
  const socialLinks = (
    <>
      <a
        href="https://www.facebook.com/PurelyGreenBand"
        target="_blank"
        rel="no-referrer"
      >
        <FaFacebook color="#fff" fontSize={32} />
      </a>
      <a
        href="https://www.instagram.com/purelygreenband"
        target="_blank"
        rel="no-referrer"
      >
        <FaInstagram color="#fff" fontSize={32} />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="no-referrer">
        <FaYoutube color="#fff" fontSize={32} />
      </a>
    </>
  )

  const linksJSX = (
    <>
      <Link to="#videos">Videos</Link>
      <Link to="#gallery">Gallery</Link>
      <Link to="#contact">Contact</Link>
    </>
  )

  return (
    <StyledFooter>
      <StaticImage
        src="../assets/images/footer.svg"
        alt="band playing"
        layout="fullWidth"
        className="footer__img"
      />

      <div className="footer__content">
        <div className="footer__content__top">
          <StaticImage
            src="../assets/images/nav-logo.svg"
            placeholder="blurred"
            alt="logo"
          />
        </div>

        <div className="footer__content__links">{socialLinks}</div>

        <div className="footer__content__bottom">{linksJSX}</div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  /* display: flex; */
  background: #000;
  width: 100%;
  height: 100%;
  position: relative;
  /* min-height: 500px; */

  .footer__content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .footer__img {
    height: 100%;
    width: 100%;
  }

  .footer__content__links {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    gap: 10px;
    a {
      /* margin-right: 20px; */
      /* font-size: 32px; */
    }
  }

  .footer__content__bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    gap: 10px;
    a {
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      font-size: "Inter", sans-serif;
      font-weight: 500;
    }
  }
`

export default Footer
