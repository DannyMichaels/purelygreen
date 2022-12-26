import React from "react"
import styled from "styled-components"

function Button({
  backgroundColor = "#1D372A",
  hoverColor = "#1D372A",
  onClick = () => {},
  children,
  ...rest
}) {
  return (
    <StyledButton backgroundColor={backgroundColor} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border-radius: 40px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 12px;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
export default Button
