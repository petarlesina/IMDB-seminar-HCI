import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Error" keywords="Error" /> 
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
