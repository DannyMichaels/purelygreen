import React from "react"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

const FACEBOOK_LINK = `https://www.facebook.com/PurelyGreenBand`
const INSTAGRAM_LINK = `https://www.instagram.com/purelygreenband`
const YOUTUBE_LINK = `https://www.youtube.com/@purelygreenbandli`

function SocialLinks({ fontSize = 32, color = "#fff" }) {
  return (
    <>
      <a href={FACEBOOK_LINK} target="_blank" rel="no-referrer">
        <FaFacebook color={color} fontSize={fontSize} />
      </a>
      <a href={INSTAGRAM_LINK} target="_blank" rel="no-referrer">
        <FaInstagram color={color} fontSize={fontSize} />
      </a>
      <a href={YOUTUBE_LINK} target="_blank" rel="no-referrer">
        <FaYoutube color={color} fontSize={fontSize} />
      </a>
    </>
  )
}

export default SocialLinks
