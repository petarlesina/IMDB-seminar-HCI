import React from 'react'
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import "./albumTempStyle.css"
import albumLogo from "../../images/masterofpuppets.jpg"

const AlbumsPage = () => {

    

    return (
            <div>
            <Layout>
            <SEO title="Album" keywords="Album" /> 
            <div className="albumContainer">

            <div class="albumHead">
            <h1 class="albumTitle">Master of Puppets</h1>
            </div>

            <div class="albumLogo">
                <img src={albumLogo} alt="nema slike">
                </img>
            </div>

            <div class="albumInfo">
                <ul class="infoNiz">
                <li>Released March 03, 1986 </li>
                <li>Thrash metal </li>
                <li>Made by <Link className="albumToArtistlink" to="../artist-temp">Metallica</Link></li>
                </ul>
            </div>

            <div class="albumTekst">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Morbi enim nunc faucibus a pellentesque sit. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. 
                Rhoncus urna neque viverra justo nec ultrices dui sapien. Sit amet purus gravida quis blandit turpis cursus in hac. 
                Sit amet cursus sit amet dictum sit. Vitae justo eget magna fermentum iaculis. 
                In egestas erat imperdiet sed euismod nisi porta lorem mollis. In hendrerit gravida rutrum quisque non. 
                Fringilla ut morbi tincidunt augue interdum velit. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.
                </p>
            </div>

            <div class="albumPjesme">
                <ul class="albumNiz"><h2>List of songs</h2>
                    <li>
                    <a 
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    class="albumLink"
                    rel="noopener noreferrer">Battery</a>
                    </li>
                    <li>
                    <a 
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    class="albumLink"
                    rel="noopener noreferrer">Master Of Puppets</a>
               </li>
               <li> 
                    <a 
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    class="albumLink"
                    rel="noopener noreferrer">The Thing That Should Not Be</a>
                </li>
                <li>
                    <a 
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    class="albumLink"
                    rel="noopener noreferrer">Welcome Home</a>
                </li>
                <li>
                    <a 
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    class="albumLink"
                    rel="noopener noreferrer">Disposable Heroes</a>
                </li>
                <li>
                    <a 
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    class="albumLink"
                    rel="noopener noreferrer">Leper Messiah </a>
                    </li>
                </ul>
            </div>
            <h2 class="gradeText">Grade the album:</h2>
            <div class="ratingContainer">
                
                <div class="rating-wrapper">
                    <input type="radio" name="rating" id="star1"></input><label for="star1"></label>
                    <input type="radio" name="rating" id="star2"></input><label for="star2"></label>
                    <input type="radio" name="rating" id="star3"></input><label for="star3"></label>
                    <input type="radio" name="rating" id="star4"></input><label for="star4"></label>
                    <input type="radio" name="rating" id="star5"></input><label for="star5"></label>
                </div>

            </div>


            </div>

            <Link to="/albums" className="albumBackButton"> ← Back </Link>




            </Layout>
            </div>
        

    )

}

export default AlbumsPage