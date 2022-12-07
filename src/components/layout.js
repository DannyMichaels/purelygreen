import * as React from "react"
import Footer from "./footer"
import Nav from "./Nav"
import "normalize.css"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
