import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import logo from "../images/logo.png"

import footerStyles from './footer.module.css'

import youtube from "../images/youtube.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"

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
            <div className={footerStyles.leftColumn}>
            <h5 className={footerStyles.title} color="#ffffff">
            Find us on social media
             </h5>
              <div className={footerStyles.socialMedia}>
                  

              <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={footerStyles.img} src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={footerStyles.img}
                src={instagram}
                alt="instagram"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={footerStyles.img} src={twitter} alt="twitter" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={footerStyles.img} src={youtube} alt="youtube" />
            </a>


              </div>
            </div>

            <div className={footerStyles.rightColumn}>

            <h1 >Our newsletter</h1>
            <div className={footerStyles.border}></div>
              <h3>Enter your email to get our news</h3>
              <form action="" className={footerStyles.newsletter}>
                <input type="text" class={footerStyles.txtb} placeholder="Enter your email"></input>
                <input type="submit" class={footerStyles.sub} value="Submit"></input>
                  
                
              </form>
            


            </div>


          </div>



          <p className={footerStyles.copyright}>
              Made by {data.site.siteMetadata.author}
            </p>




        </footer>

    )

}

export default Footer