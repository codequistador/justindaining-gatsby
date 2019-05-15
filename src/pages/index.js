import React from "react"

import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Kudos from "../components/kudos"

const H1 = styled.h1`
  font-size: 68px;
  margin: 45px 0;
`

const H2 = styled.h2`
  font-size: 42px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <H1>Justin Daining</H1>
    <H2>Testimonials</H2>
    <Kudos />
    <H2>Experience</H2>
    <H2>Tools</H2>
    <H2>Results</H2>
    <H2>Contact</H2>
  </Layout>
)

export default IndexPage
