import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FaApple } from "react-icons/fa"

const query = graphql`
  query GetConstants {
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

function getConstant(nodes, name) {
  const node = nodes.find(n => n.data.key === name)
  return node?.data?.value || ""
}

function toSpotifyEmbed(url) {
  if (!url) return ""
  return (
    url.replace("open.spotify.com/", "open.spotify.com/embed/") +
    "?utm_source=generator&theme=0"
  )
}

function Music() {
  const data = useStaticQuery(query)
  const nodes = data.allAirtable.nodes

  const spotifyUrl = getConstant(nodes, "MUSIC_SPOTIFY_URL")
  const appleMusicUrl = getConstant(nodes, "MUSIC_APPLE_URL")
  const embedUrl = toSpotifyEmbed(spotifyUrl)

  if (!spotifyUrl && !appleMusicUrl) return null

  return (
    <Section id="music">
      <Title>Music</Title>

      {embedUrl && (
        <EmbedContainer>
          <iframe
            title="Spotify player"
            src={embedUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </EmbedContainer>
      )}

      {appleMusicUrl && (
        <AppleMusicLink href={appleMusicUrl} target="_blank" rel="noreferrer">
          <FaApple fontSize={20} />
          Listen on Apple Music
        </AppleMusicLink>
      )}
    </Section>
  )
}

const Section = styled.section`
  background: #1d372a;
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  margin: 0 0 32px;
`

const EmbedContainer = styled.div`
  width: 100%;
  max-width: 660px;
  border-radius: 12px;
  overflow: hidden;

  iframe {
    display: block;
    border-radius: 12px;
  }
`

const AppleMusicLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding: 12px 24px;
  background: #fff;
  color: #000;
  border-radius: 50px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`

export default Music
