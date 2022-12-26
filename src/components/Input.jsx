import React from "react"
import styled from "styled-components"

function Input({ component = "input", label, id, ...rest }) {
  const TextField = styled[component]`
    box-sizing: border-box;
    border: 1px solid #5f9c71;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #000000;
    padding: 10px;
  `

  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <TextField id={id} {...rest} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  padding-left: 32px;
  padding-right: 32px;

  label {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    width: 100%;
    text-align: left;
  }
`
export default Input
