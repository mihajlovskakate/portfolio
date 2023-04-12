import React from "react"
import { useState } from "react"

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)


    return (
        <nav className="navbar">
            <a href="#home" className="nav-brand">K.</a>
            <button onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className={isNavExpanded? "navbar-links active":"navbar-links"}>
                <ul>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>

                </ul>
            </div>
        </nav>
    )
}



export default Navbar