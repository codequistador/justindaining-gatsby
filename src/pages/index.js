import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h1>Justin Daining</h1>
      <h2>Testimonials</h2>
      <p>lorem ipsum woot woot</p>
      <h2>Experience</h2>
      <h2>Tools</h2>
      <h2>Results</h2>
      <h2>Contact</h2>
    </div>
  </Layout>
)

export default IndexPage
