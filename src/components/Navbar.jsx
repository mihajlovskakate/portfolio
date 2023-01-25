import React from "react"
import { useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)


    return (
        <nav className="navbar">
            <Link to="/" id="nav-brand">K.</Link>
            <button onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className={isNavExpanded? "navbar-links active":"navbar-links"}>
                <ul>
                    <CustomLink to="/about">About</CustomLink>

                    <CustomLink to="/projects">Projects</CustomLink>

                    <CustomLink to="/contact">Contact</CustomLink>

                </ul>
            </div>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar