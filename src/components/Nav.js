import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { StaticImage } from "gatsby-plugin-image"
import useMediaQuery from "../hooks/useMediaQuery"

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const toggleDrawerOpen = () => setIsDrawerOpen(prevState => !prevState)

  const isSmScreen = useMediaQuery("(max-width: 768px)")

  const linksJSX = (
    <LinksList>
      <li>
        <Link to="#videos">Videos</Link>
      </li>
      <li>
        <Link to="#gallery">Gallery</Link>
      </li>
      <li>
        <Link to="#contact">Contact</Link>
      </li>
    </LinksList>
  )

  const rowJSX = (
    <div className="nav__row">
      <div className="nav__logo">
        <StaticImage
          src="../assets/images/nav-logo.svg"
          alt="logo"
          placeholder="tracedSVG"
        />
      </div>

      {!isSmScreen && linksJSX}
      <div className="nav__hamburger">
        {isDrawerOpen ? (
          <AiOutlineClose
            cursor="pointer"
            color="#fff"
            fontSize={32}
            aria-label="hamburger"
            onClick={toggleDrawerOpen}
          />
        ) : (
          <GiHamburgerMenu
            cursor="pointer"
            color="#fff"
            fontSize={32}
            aria-label="hamburger"
            onClick={toggleDrawerOpen}
          />
        )}
      </div>
    </div>
  )

  return (
    <nav>
      <HamburgerMenu className={isDrawerOpen ? "drawer-open" : "drawer-closed"}>
        <div className="nav__drawer">
          {rowJSX}
          {isSmScreen && <div className="nav__mobile__links">{linksJSX}</div>}
        </div>
      </HamburgerMenu>
    </nav>
  )
}

const HamburgerMenu = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 999999;

  .nav__drawer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    transition: all 0.2s ease-in-out;
    transform: translateY(-100%);

    .nav__mobile__links {
      padding: 20px;
    }
    ul {
      display: flex;
      flex-direction: row;
      width: 100%;
      gap: 10px;
      padding: 1rem;
      transition: transform 0.5s ease-in-out;
      justify-content: flex-end;
      @media screen and (max-width: 768px) {
        justify-content: center;
        transform: translateY(-300%);
        flex-direction: column;
      }
    }

    /* @media screen and (max-width: 768px) {
      transform: translateY(
        -100%
      ); // make the links list not appear when drawer closed in mobile
    } */
  }

  .nav__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 100%; */
    padding: 20px;
  }

  .nav__hamburger {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .nav__hamburger {
      display: block;
    }
  }

  &.drawer-open .nav__drawer {
    display: block;
    transform: translateY(0);
    z-index: 999;
    min-height: 500px;
  }

  &.drawer-open .nav__drawer ul {
    transform: translateY(0);
  }
`
const LinksList = styled.ul`
  padding-left: 0;
  margin-left: 0;
  list-style: none;

  li {
    margin-bottom: 32px;

    a {
      color: #fff;
      font-family: "Inter", sans-serif;
      font-size: 40px;
      text-align: left;
      line-height: 48px;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: auto;
    padding: 20px;
  }
`

export default Nav
