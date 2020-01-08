import React from "react"
import { Link } from "gatsby"

import "./navigation.css"

const Navigation = ({menuItems}) => {
    return (
        <ul className = "navList">
            {menuItems.map(({ link, text}) => (
                <li className = "item" key={text}>
                    <Link className = "button" activeClassName ="activeButton" to={link}>{text}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Navigation
