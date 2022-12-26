import React from "react"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

function Index() {
  return (
    <Layout>
      <Hero />

      <Contact />
    </Layout>
  )
}

export const Head = () => <Seo title="Purely Green" />

export default Index
