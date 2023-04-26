import React from "react"


function Home() {

    return (
        <section id="home" className="home-hero">
            <div className="home-wrapper">
                <div className="home-title">
                    <h1>Katerina Mihajlovska</h1>
                    <h3 className="hero-subtitle">Front-end web developer</h3>
                </div>
                <a href="#projects"><button className="btn pop-in">Projects</button></a>
            </div>
        </section>
    );
}

export default Home