import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import './404.css'

const NotFoundPage = () => (
  <div>
    <SEO title="Error" keywords="Error" /> 
    <div class="errorContainer">
      <h2>Oops! Page not found.</h2>
      <h1>404</h1>
      <p>We can't find the page you're looking for.</p>
      <Link to='/'>Go back home</Link>
    </div>
    </div>
)

export default NotFoundPage
