import React from 'react'
import { Link } from "gatsby"
import SEO from "../components/seo"
import './artistsStyle.css'
import logo from "../images/logo.png"
import photo from "../images/gatsby-icon.png"
import Layout from '../components/layout'


const ArtistsPage = () => {

    const cardArray = [
 
        {
          path: "",
          title: "tomson",
          text: "Here you can discover new albums, who knows what you can find!",
          photo: logo,
        },
        {
          path: "",
          title: "maiden",
          text: "Discover new or rediscover old groups",
          photo: photo,
        },
        {
          path: "",
          title: "radast",
          text: "Read the comments made by other people",
          photo: photo,
        },
        {
            path: "",
            title: "cmaridni",
            text: "Here you can discover new albums, who knows what you can find!",
            photo: photo,
          },
          {
            path: "",
            title: "alozzz",
            text: "Discover new or rediscover old groups",
            photo: photo,
          },
          {
            path: "",
            title: "skoro",
            text: "Read the comments made by other people",
            photo: photo,
          },
          {
            path: "",
            title: "skoro",
            text: "Read the comments made by other people",
            photo: photo,
          },
          {
            path: "",
            title: "skoro",
            text: "Read the comments made by other people",
            photo: photo,
          },
          {
            path: "",
            title: "skoro",
            text: "Read the comments made by other people",
            photo: photo,
          },
      ]

    return (
        <div>
            <Layout>
            <SEO title="Artists" keywords="Artists" /> 
            <div class="card-container2">
              
              <div class="heading2">
                <h1>Artists</h1>
              </div>

              <div class="searchWrapper">
                <input
                    type="text"
                    name="searchBar"
                    class="searchBar"
                    placeholder="Search artists"
                /> 
                
            </div>

              <div class="card-row2">
              {cardArray.map(card => (
            <Link to="/" className="card2">
            <div class="card-header2">
                  <h1>{card.title}</h1>
            </div>

            <div class="card-body2">
              <img class="picture" src={card.photo} alt="Italian Trulli"></img>
                <p class="tekst-kartice">{card.text}</p>
                {/* <Link to={card.path} className="btn2" key={card.path}> Read more </Link> */}
                </div>
                </Link>
            ))}

              </div>


            </div>


            </Layout>
        </div>


    )

}

export default ArtistsPage