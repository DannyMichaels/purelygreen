import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Input from "./Input"
import Button from "./Button"

function Contact() {
  return (
    <Container id="contact">
      <StaticImage
        className="contact__weed"
        src="../assets/images/buncha-weed.svg"
        placeholder="traced-svg"
        layout="fullWidth"
      />

      <Form action="https://formspree.io/f/mgebvezb" method="POST">
        <Title>Contact Us</Title>

        <div>
          <Input
            label="Email"
            id="email"
            name="email"
            placeholder="youraddress@email.com"
          />
        </div>

        <div>
          <Input label="Name" id="name" name="name" placeholder="Your name" />
        </div>

        <div>
          <Input
            label="How can we help you?"
            id="message"
            name="message"
            placeholder="Write your concern here..."
            component="textarea"
          />
        </div>

        <Button
          type="submit"
          style={{
            width: "100px",
            marginLeft: "32px",
            marginRight: "32px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Submit
        </Button>
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

  position: relative;
  .contact__weed {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  z-index: 1;
`

const Form = styled.form`
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 500;
  color: #1d372a;
  text-align: center;
`

export default Contact
