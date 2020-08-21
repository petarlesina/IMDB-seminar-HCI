import React from 'react'
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import "./artistTempStyle.css"
import artistLogo from "../../images/metallica.jpg"



const ArtistPage = () => {

    

    return (
            <div>
            <Layout>
            <SEO title="Artist" keywords="Artist" /> 
            <div className="artistContainer">

            <div class="artistHead">
            <h1 class="artistTitle">Metallica</h1>
            </div>

            <div class="artistLogo">
                <img src={artistLogo} alt="nema slike">
                </img>
            </div>

            <div class="artistInfo">
                <ul class="infoNiz">
                <li>Formed on October 28, 1981 </li>
                <li>Heavy metal band </li>
                </ul>
            </div>

            <div class="artistTekst">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Morbi enim nunc faucibus a pellentesque sit. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. 
                Rhoncus urna neque viverra justo nec ultrices dui sapien. Sit amet purus gravida quis blandit turpis cursus in hac. 
                Sit amet cursus sit amet dictum sit. Vitae justo eget magna fermentum iaculis. 
                In egestas erat imperdiet sed euismod nisi porta lorem mollis. In hendrerit gravida rutrum quisque non. 
                Fringilla ut morbi tincidunt augue interdum velit. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.
                </p>
            </div>

            <div class="artistAlbumi">
                <ul class="artisNiz"><h2>List of albums</h2>
                    <li>
                    <Link to="../album-temp" class="linkNaAlbum">Kill 'Em All(1983)</Link>
                    </li>
                    <li>
                    <Link to="../album-temp" class="linkNaAlbum">Ride the Lightning (1984)</Link>
                    </li>
                    <li> 
                    <Link to="../album-temp" class="linkNaAlbum">Master of Puppets (1986)</Link>
                    </li>
                    <li>
                    <Link to="../album-temp" class="linkNaAlbum">...And Justice for All (1988)</Link>
                    </li>
                    <li>
                    <Link to="../album-temp" class="linkNaAlbum">Metallica (1991)</Link>
                    </li>
                    <li>
                    <Link to="../album-temp" class="linkNaAlbum">Load (1996)</Link>
                    </li>
                </ul>
            </div>
            
            

            </div>

            <Link to="/artists" className="albumBackButton"> ← Back </Link>




            </Layout>
            </div>
        

    )

}

export default ArtistPage