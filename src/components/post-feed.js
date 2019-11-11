import "./post-feed.css"

import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Post = ({ post }) => {
  return (
    <Link className="Post" to={`/`}>
      {/* Post image goes here */}
      <h2>Post title</h2>
      <p>Preview text</p>
    </Link>
  )
}

const PostFeed = () => {
  /*
   Implement post feed component here
  */
  return <section className="PostFeed"></section>
}

export default PostFeed
