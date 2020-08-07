import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.css'

const Footer =() => {

    const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          author
        }
      }
    }
  `)

    return (
        <footer className={footerStyles.footer}>
          <div className={footerStyles.container}>
            
          </div>
          <p className={footerStyles.copyright}>
              Napravili {data.site.siteMetadata.author}
            </p>
        </footer>

    )

}

export default Footer