import React from "react"
import {Link} from "gatsby"

const IndexPage = () => <>
  <h1>Teaching HCI</h1>
  <h2>Examples: </h2>
  <ul>
    <li><Link to="/examples/example-1">Example 1</Link></li>
    <li><Link to="/examples/example-2">Example 2</Link></li>
    <li><Link to="/examples/example-3">Example 3</Link></li>
    </ul>
    <h2>
    <Link to="/blog/">Blog</Link>
    </h2>
    </>

export default IndexPage