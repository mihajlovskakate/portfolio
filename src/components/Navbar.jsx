import React from "react"
import { useState, useEffect } from "react"

function Navbar() {
    const [isActive, setActive] = useState(false)

    useEffect(() => {
        const navItemLinks = Array.from(document.querySelectorAll('.navbar-items ul li'));
    
        const handleClick = () => {
          setActive(false);
        };

        navItemLinks.forEach((li, i) => {
            li.style.transitionDelay = `${i * 150}ms`;
          });
    
        navItemLinks.forEach((i) => {
          i.addEventListener('click', handleClick);
        });
    
        return () => {
          navItemLinks.forEach((i) => {
            i.removeEventListener('click', handleClick);
          });
        };
      }, []); 
    

    return (
        <nav className="navbar"> 
        <div className="wrapper">             
            <a href="#home" className="logo">K.</a>
            <div className="menu-icon" onClick={() => {
                        setActive(true);
                        }}>
                    <i className="fa-solid fa-bars fa-2xl"></i>
            </div>
                    

                <div className={isActive? "navbar-items active":"navbar-items"}>

                    <div className="close-icon" onClick={() => {
                        setActive(false);
                        }}>
                        <i className="fa-solid fa-xmark fa-2xl"></i>
                    </div>
                    
                    <ul>
                        <li>
                        <a href="#about">About</a>
                        </li>
                        <li>
                        <a href="#projects">Projects</a>
                        </li>
                        <li>
                        <a href="#contact">Contact</a>  
                        </li>                            
                    </ul>
                    </div>
                </div> 
        </nav>
    )
}

export default Navbar