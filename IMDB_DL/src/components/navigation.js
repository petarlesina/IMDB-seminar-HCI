import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import "./navigation.css"

const Navigation = ({menuItems}) => {

    const data = useStaticQuery(graphql`
    {
        site {
          siteMetadata {
              menuItems {
                  link
                  text
              }
              title
          }
        }
    }
  `)

    return (
        <div>
        <Link className = "title" to="/">
            {data.site.siteMetadata.title} </Link>
        <ul className = "navList">
        {menuItems.map(({ link, text}) => (
            <div className="test">
                <li className = "item" key={text}>
                    <Link className = "button" activeClassName ="activeButton" to={link}>{text}</Link>
                </li>
            </div>
            ))}
        </ul>
        </div>
    )
}

export default Navigation
