import React from "react"

function About (){
    return(
        <section id="about" className="about-section">
        <div className="about-title">
            <h2>About me</h2> 
        </div>
        <img className="profile-picture" src={`${process.env.PUBLIC_URL}/images/profile-picture.png`} alt="profile"></img>
        <div className="about-salutation">
            <h3 className="about-subtitle">
                Hello &bull; Hej &bull; Hola &bull; Salut &bull; Здраво &bull; Здрасти
            </h3>
        </div>
        <div className="about-description">
            <p>My name is Katerina Mihajlovska and I am a language geek. I love both natural and artifitial languages. English, Dansih, Spanish, French, Macedonian, Bulgarian... HTML, CSS and JavaScript. 
            </p>
            <p>I studied Natural Language Processing, but I have a long experience as a language teacher. From teaching in a classroom to lines of code on a web page, I am pationate about combining logics with creativity in order to create eye-catching, accessible, and user-friendly websites and applications.
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