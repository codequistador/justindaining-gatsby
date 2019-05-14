import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Page = styled.div`
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  margin: 0 auto;
  max-width: 600px;
`

const Layout = ({ children }) => (
  <Page>
    <main>{children}</main>
    <footer>© {new Date().getFullYear()}</footer>
  </Page>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
