import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

function Index() {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export const Head = () => <Seo title="Purely Green" />

export default Index
