import React from "react"

function Footer(){
    return(
        <div className = "footer">
        <div className="social-network-icons">
                            <a className="social-link" href="https://www.linkedin.com/in/kmihajlovska/"><i className="fa-brands fa-linkedin fa-2x"></i></a>
                            <a className="social-link" href="https://www.appbrewery.co/"><i className="fa-brands fa-square-github fa-2x"></i></a>
                        </div>
            <div className="main-footer-lower">
            <p>© 2022. Made by Katerina Mihajlovska.</p>
            </div>
        </div>
    )
}

export default Footer