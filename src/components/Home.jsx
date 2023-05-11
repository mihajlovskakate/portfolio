import React from "react"


function Home() {

    return (
        <section id="home" className="home-hero">
            <div className="home-wrapper">
                <div className="left">
                    <h1>Hi, I'm Katerina</h1>
                    <h3 className="hero-subtitle">Front-end web and app developer</h3>
                    <a href="#projects"><button className="btn pop-in">My Projects</button></a>
                </div>
                <div className="right">
                    <div className="blob"></div>

                </div>
            </div>
            <a href="#about" className="down-arrow">
                <i class="fa-solid fa-angle-down fa-2xl" style={{ color: "#3089c0" }}></i>
            </a>

        </section>
    );
}

export default Home