import React from "react"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Music from "../components/Music"

function Index() {
  return (
    <Layout>
      <Hero />

      <Music />
      <Gallery />
      <div className="footer-contact__container">
        <Contact />
        <Footer />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Purely Green" />

export default Index
