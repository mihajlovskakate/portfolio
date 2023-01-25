import React from "react"
import {Link} from "react-router-dom"

function Home() {


    return (
        <section className="home-hero">
            <div className="home-wrapper">
                <div className="home-title">
                    <h1>Hi, I'm Katerina.</h1>
                    <h3>a web developer.</h3>
                </div>
                   
            
                <Link to="/projects">
                    <button className="btn">Projects</button>
                </Link>
            </div>

        </section>
    );
}

export default Home