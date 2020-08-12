import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
         query {
             allMarkdownRemark {
                 edges {
                     node {
                         frontmatter {
                             title
                             date
                         }
                         fields {
                             slug
                         }
                     }
                 }
             }
         }
     `)

    

    return (
        <div>
            <Layout>
            <SEO title="Blog" keywords="Blog" /> 
            <h1 className={blogStyles.title}>Blog</h1>
            <ol className={blogStyles.posts}>

                {data.allMarkdownRemark.edges.map((edge) =>{
                    return (
                        <li className={blogStyles.singlePost}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h3>{edge.node.frontmatter.title}</h3>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}

            </ol>
            </Layout>
        </div>
    )

}

export default BlogPage