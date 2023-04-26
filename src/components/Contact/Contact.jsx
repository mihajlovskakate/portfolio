import React from "react"
import ContactForm from "./ContactForm";
import emailjs from '@emailjs/browser';

function Contact() {

    const form = React.createRef();

    function sendEmail(e) {
            e.preventDefault();
            const btn = document.getElementById("contactBtn");
            btn.innerHTML = "Sending..."
            emailjs.sendForm('service_daidgez', 'template_xipp01l', form.current, 'EgedSTZge-SVdSIRS')
              .then((result) => {
                btn.innerHTML = 'Send message';
                alert('Sent!');           
                }, (error) => {
                btn.innerHTML= 'Send message';
                console.log(error.text);
              });
            }

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-title">
                    <h2>Contact me</h2>
                </div>
                <div className="row">
                        <div className="col details">                           
                            <div className="contact-intro">
                                <p>Feel free to reach out if you're interested in working together or if you have any questions about me or my projects. </p>
                                <p>Are you also pasonate about NLP or using technology in your classroom? Contact me, and we can talk about computantional linguistics, Computer-Assessed Language Learning or different trends in Education Technology!</p>
                                <p>Straight shot to my inbox: <a className="mail" href="mailto:mihajlovskakate@gmail.com">mihajlovskakate@gmail.com</a></p>
                            </div>
                            <div className="social-network-icons">
                                <a className="social-link" href="https://www.linkedin.com/in/kmihajlovska/"><i className="fa-brands fa-linkedin fa-2x"></i></a>
                                <a className="social-link" href="https://github.com/mihajlovskakate"><i className="fa-brands fa-square-github fa-2x"></i></a>
                        </div>    
                        </div>
                        <div className="col form">
                            <ContactForm
                                ref = {form}
                                onSubmit={sendEmail}
                            />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Contact