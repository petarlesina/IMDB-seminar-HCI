import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"

import Layout from '../components/layout'

const BlogPage = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                         date
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)

    

    return (
        <div>
            <Layout>
            <h1>blog</h1>
            <ol>

                {/* {data.allMarkdownRemark.edges.map((edge) =>{
                    return (
                        <li>
                            <h3>{edge.node.frontmatter.title}</h3>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })} */}

            </ol>
            </Layout>
        </div>
    )

}

