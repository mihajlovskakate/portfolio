import React from "react"
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";




var required = true;

function Contact() {

    const navigate = useNavigate();

    function handleSubmit() {
        return <div>
            {required && navigate("/thankyou")}
        </div>
    }



    return (
        <section id="contact-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="column">
                        <div className="contact-title">
                            <h2>Contact me</h2>
                        </div>
                        <p>Need to get in touch with me? Either fill out the form with your inquiry or send me an email on <a href="mihajlovskakate@gmail.com">mihajlovskakate@gmail.com</a></p>

                    </div>
                    <div className="column">
                        <ContactForm
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact