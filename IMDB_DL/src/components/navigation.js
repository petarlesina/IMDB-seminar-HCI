import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import "./navigation.css"
// import logo from "../images/logo.png"
// import imdblogo from "../images/imdblogo.png"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";




const Navigation = ({menuItems}) => {



    const data = useStaticQuery(graphql`
    {
        site {
          siteMetadata {
              menuItems {
                  link
                  text
              }
              title
          }
        }
    }
  `)
    return (
        
        <nav>

        
        <ul>
        <li className = "logo" ><Link to="/">IMDB</Link>
       </li>

       
       <input type="checkbox" id="chk" value="unchecked"></input>
       {/* <label for="chk" class="showMenuBtn"><FaEllipsisH size="1.4rem"/></label> */}
       <label for="chk" class="showMenuBtn"><FaChevronDown size="1.4rem"/></label>
        
            {menuItems.map(({ link, text}) => (
                <li id="oneItem" class="items" key={text}>
                    <Link class="navButton" activeClassName ="activeButton" to={link}>{text}</Link>
                </li>    
            ))}
        
        <label for="chk" class="hideMenuBtn"><FaChevronUp size="1.4rem"/></label>
        {/* <li id="ham" class="ham"><FaBars size="1.4rem"/> </li> */}
        </ul>



        </nav>
        
    )
}

export default Navigation
