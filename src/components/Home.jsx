import React from "react"


function Home() {

    return (
        <section id="home" className="hero">
                    <div className="pink-blob-1"></div>
            <div className="hero-wrapper">
                    <div className="pink-blob-2"></div>
                    <div className="pink-blob-3"></div>
                <div className="hero-left">
                    <h1>Hi, I'm Katerina</h1>
                    <h3>Front-end web and app developer</h3>
                    <a href="#projects"><button className="btn">My Projects</button></a>  
                </div>
                <div className="hero-right">  
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