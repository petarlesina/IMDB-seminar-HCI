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
          category: "Rock",
          photo: logo,
          year: "1988",
          madeby: "artist1"
        },
        {
          path: "",
          title: "album2",
          category: "Jazz",
          photo: photo,
          year: "1981",
          madeby: "artist4"
        },
        {
          path: "",
          title: "album3",
          category: "Techno",
          photo: photo,
          year: "1948",
          madeby: "artist3"
        },
        {
            path: "",
            title: "album4",
            category: "Country",
            photo: photo,
            year: "1969",
            madeby: "artist1"
          },
          {
            path: "",
            title: "album5",
            category: "Rock",
            photo: photo,
            year: "1985",
            madeby: "artist1"
          },
          {
            path: "",
            title: "album6",
            category: "Classical",
            photo: photo,
            year: "1928",
            madeby: "artist4"
          },
          {
            path: "",
            title: "album7",
            category: "Rock",
            photo: photo,
            year: "2000",
            madeby: "artist3"
          },
          {
            path: "",
            title: "album8",
            category: "Metal",
            photo: photo,
            year: "1999",
            madeby: "artist3"
          },
          // {
          //   path: "",
          //   title: "album9",
          //   category: "Rock",
          //   photo: photo,
          //   year: "2020",
          //   madeby: "artist4"
          // },
      ]

    return (
        <div>
            <Layout>
            <SEO title="Albums" keywords="Albums" /> 
            <div class="card-container3">
              
              <div class="heading3">
                <h1>Albums</h1>
              </div>

              <div class="searchWrapper3">
                <input
                    type="text"
                    name="searchBar"
                    class="searchBar3"
                    placeholder="Search albums"
                /> 
                
            </div>

              <div class="card-row3">
              {cardArray.map(card => (
            <Link to="../temp/artist-temp" className="card3">
            <div class="card-header3">
                  <h1>{card.title}</h1>
            </div>

            <div class="card-body3">
              <img class="picture3" src={card.photo} alt="Italian Trulli"></img>
                <p class="kategorija-kartice">Category: {card.category}</p>
                <p class="godina-kartice">Year: {card.year}</p>
                <p class="madeby-kartice">
                  <Link to={card.path} className="link-artist" key={card.path}> {card.madeby} </Link>
                  </p>
                
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