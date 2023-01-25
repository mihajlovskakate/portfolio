import React from "react"
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
import emailjs from '@emailjs/browser';

var required = true;

function Contact() {

    const form = React.createRef();

    const navigate = useNavigate();

    function sendEmail(e) {
            e.preventDefault();

            emailjs.sendForm('service_daidgez', 'template_xipp01l', form.current, 'EgedSTZge-SVdSIRS')
              .then((result) => {
                  
                  required && navigate("/thankyou");              
                }, (error) => {
                  console.log(error.text);
              });
          
            }



    return (
        <section id="contact-section">
            <div className="container-fluid">
                
                    <div className="row">
                        <div className="col-3 details">
                        <div className="contact-title">
                    <h2>Contact me</h2>
                </div>
                            <ul className="contact-list">
                                    <li className="list-item"><i className="fa-solid fa-location-dot"><span className="contact-text place">Ikast, Denmark</span></i></li>
                                    <li className="list-item"><i className="fa fa-phone"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">+45 71 41 29 84</a></span></i></li>
                                    <li className="list-item"><i className="fa fa-envelope"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">mihajlovskakate@gmail.com</a></span></i></li>
                            </ul>
                        </div>
                        <div className="col-9 form">
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