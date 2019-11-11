import "./blog-post.css"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
import React from "react"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <article className="Article">
        {/* Put Hero image here */}
        <Img fluid={data.contentfulBlogPost.heroImage.fluid} />
        <section className="ArticleContent">
          <h1 className="BlogTitle">{/* Blog post title goes here */}</h1>
          <h2 className="BlogSubtitle">
            {/* Blog posted at date goes here */}
          </h2>
          {/* Blog content goes here */}
        </section>
      </article>
    </Layout>
  )
}

export default BlogPost
