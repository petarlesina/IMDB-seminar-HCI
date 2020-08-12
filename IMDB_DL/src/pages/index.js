import React from "react"
import { Link, useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Layout from '../components/layout'
import '../styles/index.scss'
import '../styles/cards.css'

const IndexPage = () => {

  const cardArray = [
 
    {
      path: "/albums",
      title: "Albums",
      text: "Here you can discover new albums, who knows what you can find!",
    },
    {
      path: "/artists",
      title: "Artists",
      text: "Discover new or rediscover old groups",
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
                <h1>Homepage</h1>
              </div>

              <div class="card-row">

                {/* <div class="card">
                <div class="card-header">
                  <h1>Albums</h1>
                </div>
                <div class="card-body">
                  <p>tekst za albume tekst za albume tekst za albume tekst za albume</p>
                  <a href="/albums" class="btn">Read more</a>
                </div>
                </div>

                <div class="card">
                <div class="card-header">
                  <h1>DRUGI CARD</h1>
                </div>
                <div class="card-body">
                  <p>DRUGI TEKST PRVI TEKST PRVI TEKST PRVI TEKST PRVI TEKST </p>
                  <a><Link className="btn" to="/albums">Read more</Link></a>
                </div>
                </div>

                <div class="card">
                <div class="card-header">
                  <h1>TRECI CARD</h1>
                </div>
                <div class="card-body">
                  <p>TRECI TEKST PRVI TEKST PRVI TEKST PRVI TEKST PRVI TEKST </p>
                  <a href="#" class="btn">Read more</a>
                </div>
                </div> */}

            {cardArray.map(card => (
            <div className="card">
            <div class="card-header">
                  <h1>{card.title}</h1>
            </div>
            <div class="card-body">
                <p>{card.text}</p>
                <Link to={card.path} className="btn" key={card.path}> Read more </Link>
                </div>
                </div>
            ))}

              </div>


            </div>

          </Layout>          
      )
      }

export default IndexPage

