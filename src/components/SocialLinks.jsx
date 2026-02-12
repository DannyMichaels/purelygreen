import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaApple,
} from "react-icons/fa"

const SOCIAL_ICONS = {
  SOCIALS_FACEBOOK_URL: FaFacebook,
  SOCIALS_INSTAGRAM_URL: FaInstagram,
  SOCIALS_YOUTUBE_URL: FaYoutube,
  MUSIC_SPOTIFY_URL: FaSpotify,
  MUSIC_APPLE_URL: FaApple,
}

const query = graphql`
  query GetSocialConstants {
    allAirtable(filter: { table: { eq: "Constants" } }) {
      nodes {
        data {
          key
          value
        }
      }
    }
  }
`

function SocialLinks({ fontSize = 32, color = "#fff" }) {
  const data = useStaticQuery(query)
  const nodes = data.allAirtable.nodes

  return (
    <>
      {Object.entries(SOCIAL_ICONS).map(([key, Icon]) => {
        const url = nodes.find(n => n.data.key === key)?.data?.value
        if (!url) return null
        return (
          <a key={key} href={url} target="_blank" rel="noreferrer">
            <Icon color={color} fontSize={fontSize} />
          </a>
        )
      })}
    </>
  )
}

export default SocialLinks
