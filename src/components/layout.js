import * as React from "react"
import Nav from "./Nav"
import "normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default Layout
