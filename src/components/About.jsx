import React from "react"

function About() {
    return (
        <section id="about" className="about-section">
                <h2>About me</h2>
                <h3 className="about-subtitle">
                    Hello &bull; Hej &bull; Hola &bull; Salut &bull; Здраво &bull; Здрасти
                </h3>
            <div className="about-description">
                <p>My name is Katerina Mihajlovska, a Front-End Web Developer based in Denmark. I love both artificial and natural languages: HTML, CSS and JavaScript... English, Dansih, Spanish, French, Macedonian and Bulgarian...
                </p>
                <p>I have a Masters in Natural Language Processing, and as a part of my PhD project I designed Computer-Assisted Language Learning materials. For more than 10 years I was working as a language teacher, continuously implementing new technologies to improve students learning. From teaching in a classroom to lines of code on a web page, I am passionate about combining logics with creativity in order to create eye-catching, accessible, and user-friendly websites and applications.
                </p>
            </div>
            <div className="about-skills">
                <h3 className="about-skills-subtitle">
                    skills
                </h3>
                <ul className="skills-container">
                    <li className="skills-title">
                        <span><i className="fa-brands fa-html5"></i></span>
                        <p>HTML</p>
                    </li>
                    <li className="skills-title">
                        <span><i className="fa-brands fa-css3-alt"></i></span>
                        <p>CSS</p>
                    </li>
                    <li className="skills-title">
                        <span><i className="fa-brands fa-js"></i></span>
                        <p>JavaScript + ES6</p>
                    </li>
                    <li className="skills-title">
                        <span><i class="fa-brands fa-bootstrap"></i></span>
                        <p>Bootstrap</p>
                    </li>
                    <li className="skills-title">
                        <span><i className="fa-brands fa-react"></i></span>
                        <p>React</p>
                    </li>
                    <li className="skills-title">
                        <span><i className="fa-solid fa-file-code"></i></span>
                        <p>REST API</p>
                    </li>
                    <li className="skills-title">
                        <span><i className="fa-solid fa-terminal fa-xs"></i></span>
                        <p>Terminal</p>
                    </li>
                    <li className="skills-title">
                        <span><i className="fa-solid fa-code-fork fa-xs"></i></span>
                        <p>Git</p>
                    </li>
                    <li className="skills-title">
                        <span><i class="fa-solid fa-laptop-code"></i></span>
                        <p>Responsive design</p>
                    </li>
                </ul>
            </div>
            <hr></hr>
        </section>
    )
}

export default About