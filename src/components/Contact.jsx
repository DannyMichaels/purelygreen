import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

function Contact() {
  return (
    <Container>
      <StaticImage
        className="contact__weed"
        src="../assets/images/buncha-weed.svg"
        placeholder="traced-svg"
        layout="fullWidth"
      />

      <Form>
        <Title>Contact Us</Title>
      </Form>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #62c980;
  width: 100%;
  height: 100%;
  min-height: 652px;
  position: relative;
  .contact__weed {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`

const Form = styled.form`
  padding: 40px;
`
const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 500;
  color: #1d372a;
  text-align: center;
`

export default Contact
