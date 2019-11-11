import React from "react"

import Layout from "../components/layout"
import PostFeed from "../components/post-feed"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout fullSizeHeader>
    <SEO title="Home" />
    <PostFeed />
  </Layout>
)

export default IndexPage
