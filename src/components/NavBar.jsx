import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function NavBar() {
    const location = useLocation();
    
    const pathClass = location.pathname.replace('/', '') || 'home';
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className={`nav-bar ${pathClass}`}>
            <h1><NavLink to="/">reseda photography</NavLink></h1>
            <ul className="desk-nav">
                <li><NavLink to="/services">services</NavLink></li>
                <li><a href="#">gallery</a></li>
                <li><NavLink to="/information">information </NavLink> </li>
                <li><NavLink to="/schedule">schedule a shoot</NavLink></li>
            </ul>
            <div className={`toggle ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
                <span className={`first ${pathClass}`}></span>
                <span className={`second ${pathClass}`}></span>
            </div>
            <ul className={`mobile-nav ${showMenu ? "show" : ""}`}>
                <li onClick={toggleMenu}><NavLink to="/services">services</NavLink></li>
                <li onClick={toggleMenu}><a href="#">gallery</a></li>
                <li onClick={toggleMenu}><NavLink to="/information">information </NavLink> </li>
                <li><NavLink to="/schedule">schedule a shoot</NavLink></li>
            </ul>
        </div>
    )
}