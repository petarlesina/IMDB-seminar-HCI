import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import style from '../templates/template-blog.css'
export const query = graphql` query (
    $slug: String!
  ){
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }`

const Blog = (props) => {
    return (
        <Layout>
          <div class="blog-site">
            <div class="head-post">
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
            </div>
            </div>
            <Link to="/blog" className="button-back"> ← Back </Link>
        </Layout>
    )

}

export default Blog