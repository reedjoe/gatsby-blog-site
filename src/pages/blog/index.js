import React from "react"
import Layout from "../../components/layout/Layout"

import BlogCardParent from "../../components/blogCardParent/BlogCardParent"

import '../styles.css';

const Blog = () => {
  return (
    <div>
      <Layout>
        <BlogCardParent></BlogCardParent>
      </Layout>
    </div>
  )
}

export default Blog;