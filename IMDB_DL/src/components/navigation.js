import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import "./navigation.css"
import logo from "../images/logo.png"

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
        
        <ul className = "navList">
        <li className = "title" >
                <Link  to="/">
            {/* {data.site.siteMetadata.title} */}
            <img className="logo" src={logo}></img> </Link> 
        </li>
            
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
