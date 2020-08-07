import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Navigation from "./navigation"
import headerStyles from './header.module.scss'

const Header = ({children}) => {
  
  

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

  const { menuItems } = data.site.siteMetadata

  return (
      <header className={headerStyles.header}>
       <h1>
            <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title} </Link>
        </h1> 
        <div>
			      <Navigation menuItems={menuItems} />
			      {children}
	       </div>
      </header>

  )

}

export default Header