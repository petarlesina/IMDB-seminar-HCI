import React from 'react'
import { Link } from "gatsby"
import SEO from "../components/seo"
import './artistsStyle.css'
import logo from "../images/metallica.jpg"
import photo from "../images/gatsby-icon.png"
import Layout from '../components/layout'


const ArtistsPage = () => {

    const cardArray = [
 
        {
          path: "",
          title: "Metallica",
          text: "James Hetfield, Lars Ulrich, Kirk Hammett, Robert Trujillo",
          photo: logo,
        },
        {
          path: "",
          title: "artist2",
          text: "imeprezimeclan1, imeclan2, imeclan3, imeclan4",
          photo: logo,
        },
        {
          path: "",
          title: "artist3",
          text: "imeprezimeclan1, imeclan2, imeclan3, imeclan4",
          photo: logo,
        },
        {
            path: "",
            title: "artist4",
            text: "imeprezimeclan1, imeclan2, imeclan3, imeclan4",
            photo: logo,
          },
          {
            path: "",
            title: "artist5",
            text: "imeprezimeclan1, imeclan2, imeclan3, imeclan4",
            photo: logo,
          },
          {
            path: "",
            title: "artist6",
            text: "imeprezimeclan1, imeclan2, imeclan3, imeclan4",
            photo: logo,
          },
          {
            path: "",
            title: "artist7",
            text: "imeprezimeclan1, imeclan2, imeclan3, imeclan4",
            photo: logo,
          },
          {
            path: "",
            title: "artist8",
            text: "imeprezimeclan1, imeclan2, imeclan3, imeclan4",
            photo: logo,
          },
          {
            path: "",
            title: "artist9",
            text: "imeprezimeclan1, imeclan2, imeclan3, imeclan4",
            photo: logo,
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

              <div class="searchWrapper2">
                <input
                    type="text"
                    name="searchBar"
                    class="searchBar2"
                    placeholder="Search artists"
                /> 
                
            </div>

              <div class="card-row2">
              {cardArray.map(card => (
            <Link to="../temp/artist-temp" className="card2">
            <div class="card-header2">
                  <h1 class="artistTitleHeader">{card.title}</h1>
            </div>

            <div class="card-body2">
              <img class="picture2" src={card.photo} alt="Italian Trulli"></img>
                <p class="tekst-kartice2">{card.text}</p>
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