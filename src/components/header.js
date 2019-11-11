import "./header.css"

import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"
import React from "react"

import FacebookIcon from "../images/facebook-square.svg"
import InstagramIcon from "../images/instagram.svg"
import LogoSvg from "../images/logo.svg"

const Logo = () => (
  <Link to="/" className="Logo">
    <LogoSvg />
  </Link>
)

const SocialLinks = () => (
  <div className="SocialLinks">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FacebookIcon className="SocialIcon" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <InstagramIcon className="SocialIcon" />
    </a>
  </div>
)

const Header = ({ siteTitle, siteDescription, fullSize }) => {
  // Read about static queries here: https://www.gatsbyjs.org/docs/static-query/
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  // Read about using Gatsby Image here: https://www.gatsbyjs.org/packages/gatsby-image/
  let contentClassName = "HeaderContent"
  if (fullSize) {
    contentClassName = "HeaderContent HeaderContentFull"
  }
  return (
    <BackgroundImage className="Header" fluid={data.hero.childImageSharp.fluid}>
      <div className={contentClassName}>
        <Logo />
        <SocialLinks />
        <h1 className="SiteHeading">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <h2 className="SiteSubHeading">{siteDescription}</h2>
      </div>
    </BackgroundImage>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  fullSize: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
  fullSize: false,
}

export default Header
