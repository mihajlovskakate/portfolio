import React from "react"


function Home() {


    return (
        <section id="home" className="home-hero">
            {/* <div className="home-picture"> */}
            {/* <!-- photo credited to Karolina Grabowska from Pexels.com --> */}
            {/* <img src={`${process.env.PUBLIC_URL}/images/hero-picture.jpg`} className= "hero-picture" alt="Flowers and mint leaves on white surface"></img> */}
            {/* </div>   */}
            <div className="home-wrapper">
                <div className="home-title">
                    <h1>Katerina Mihajlovska</h1>
                    <h3 className="hero-subtitle"> Front-end web developer</h3>
                </div>     
                <a href="#projects"><button className="btn">Projects</button></a>     
            </div>
            

        </section>
    );
}

export default Home