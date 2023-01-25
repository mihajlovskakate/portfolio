import React, { useState } from 'react'
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';



function ContactForm(props, ref) {

   
    const [contact, setContact] = useState({ fName: "", lName: "", email: "", message: "" });
    const [disable, setDisable] = useState(true);



    function handleChange(event) {
        const { name, value } = event.target;
        setContact((prevState) => {
            return {
                ...prevState, [name]: value
            }
        })
        setDisable(event.target.value === '');
    }


    return (
        <div className="contact-form">
            <form ref = {ref} id="contact" onSubmit={props.onSubmit} >
                          <Input
                    type="text"
                    onChange={handleChange}
                    name="fName"
                    value={contact.fName}
                    placeholder="First Name"
                />
                
                <Input
                    type="text"
                    onChange={handleChange}
                    name="lName"
                    value={contact.lName}
                    placeholder="Last Name" />

                <Input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={contact.email}
                    placeholder="Email" />
                <Textarea
                    onChange={handleChange}
                    name="message"
                    value={contact.message}
                    placeholder="Write your message here"
                />
                <Button
                    type="submit"
                    text = "Send message"
                    disabled={disable}
                />
            </form>
        </div>
    )
}

export default React.forwardRef(ContactForm)