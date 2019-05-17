import React from "react"

import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"
import Kudos from "../components/kudos"
import Tools from "../components/tools"

const H1 = styled.h1`
  margin: 45px 0;
`

const H2 = styled.h2``

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <H1>Justin Daining</H1>
    <H2>Experience</H2>
    <Experience />
    <H2>Tools</H2>
    <Tools />
    <H2>Results</H2>
    <H2>Testimonials</H2>
    <Kudos />
    <H2>Contact</H2>
  </Layout>
)

export default IndexPage
