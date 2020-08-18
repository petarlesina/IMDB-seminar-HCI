import React from 'react'
import { Link } from "gatsby"
import SEO from "../components/seo"
import './albumsStyle.css'
import logo from "../images/logo.png"
import photo from "../images/gatsby-icon.png"
import Layout from '../components/layout'


const AlbumsPage = () => {

    const cardArray = [
 
        {
          path: "",
          title: "album1",
          text: "Here you can discover new albums, who knows what you can find!",
          photo: logo,
        },
        {
          path: "",
          title: "album2",
          text: "Discover new or rediscover old groups",
          photo: photo,
        },
        {
          path: "",
          title: "album3",
          text: "Read the comments made by other people",
          photo: photo,
        },
        {
            path: "",
            title: "album4",
            text: "Here you can discover new albums, who knows what you can find!",
            photo: photo,
          },
          {
            path: "",
            title: "album5",
            text: "Discover new or rediscover old groups",
            photo: photo,
          },
          {
            path: "",
            title: "album6",
            text: "Read the comments made by other people",
            photo: photo,
          },
          {
            path: "",
            title: "album7",
            text: "Read the comments made by other people",
            photo: photo,
          },
          {
            path: "",
            title: "album8",
            text: "Read the comments made by other people",
            photo: photo,
          },
          {
            path: "",
            title: "album9",
            text: "Read the comments made by other people",
            photo: photo,
          },
      ]

    return (
        <div>
            <Layout>
            <SEO title="Albums" keywords="Albums" /> 
            <div class="card-container2">
              
              <div class="heading2">
                <h1>Albums</h1>
              </div>

              <div class="searchWrapper">
                <input
                    type="text"
                    name="searchBar"
                    class="searchBar"
                    placeholder="Search albums"
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

export default AlbumsPage