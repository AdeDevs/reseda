import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="nav-bar">
            <h1><NavLink to="/">reseda photography</NavLink></h1>
            <ul className="desk-nav">
                <li><a href="#">services</a></li>
                <li><a href="#">gallery</a></li>
                <li><a href="#">information</a></li>
                <li><a href="#">schedule a shoot</a></li>
            </ul>
            <div className={`toggle ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
                <span className="first"></span>
                <span className="second"></span>
            </div>
            <ul className={`mobile-nav ${showMenu ? "show" : ""}`}>
                <li><a href="#">services</a></li>
                <li><a href="#">gallery</a></li>
                <li><a href="#">information</a></li>
                <li><a href="#">schedule a shoot</a></li>
            </ul>
        </div>
    )
}