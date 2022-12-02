import React from "react"
import {Link} from "react-router-dom"

function Home() {


    return (
        <section className="home-hero">
            <div className="container-fluid">
                <div id="title-home">
                    <h1>Hi, I'm Katerina.</h1>
                </div>
                <div className="text-box">
                    <p>A Frontend Web Developer passionate about creating interactive .</p>
                </div>
                <Link to="/projects">
                    <button className="btn">Projects</button>
                </Link>
            </div>

        </section>
    );
}

export default Home