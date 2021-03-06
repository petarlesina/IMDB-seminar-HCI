import React from "react"
import { Link, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Layout from '../components/layout'
import '../styles/index.scss'
import '../styles/cards.css'

const IndexPage = () => {

  const cardArray = [
 
    
    {
      path: "/artists",
      title: "Artists",
      text: "Discover new or rediscover old groups",
    },
    {
      path: "/albums",
      title: "Albums",
      text: "Here you can discover new albums, who knows what you can find!",
    },
    {
      path: "/blog",
      title: "Blog",
      text: "Read the comments made by other people",
    },
  ]

      return (
          <Layout>
            <SEO title="Homepage" keywords="Homepage" /> 
            
            <div class="card-container">
              
              <div class="heading">
                <h1>INTERNET MUSIC DATABASE</h1>
              </div>

              <div class="card-row">


            {cardArray.map(card => (
            <Link to={card.path} className="card">
            <div class="card-header">
                  <h1>{card.title}</h1>
            </div>
            <div class="card-body">
                <p>{card.text}</p>
                <Link to={card.path} className="btn" key={card.path}> Read more </Link>
                </div>
                
                </Link>
            ))}

              </div>


            </div>

          </Layout>          
      )
      }

export default IndexPage

