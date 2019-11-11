/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./layout.css"

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Header from "./header"

const Layout = ({ children, fullSizeHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
        fullSize={fullSizeHeader}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1120,
          padding: `0px 4vw`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className="PageFooter">© {new Date().getFullYear()}</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fullSizeHeader: PropTypes.bool,
}

Layout.defaultProps = {
  fullSizeHeader: false,
}

export default Layout
