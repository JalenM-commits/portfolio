/*
contact.jsx
Jalen Mendonca - 301098614
2024

portfolio_jm
*/

import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1bsnlwa', 'template_du8sxpk', form.current, {
            publicKey:'616Np2IRI71ePqssj'
            })
            .then((result) => {
                console.log('SUCCESS!', result.text);
                e.target.reset();
                alert('Email Sent!');
            },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
        };
        
    return (
        <div className="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out this form to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="from_name" />
                <input type="email" className="email" placeholder="Your Email" name="from_email" />
                <textarea className="msg" name="message" rows={5} placeholder="Your Message"></textarea>
                <button type="submit" value='send' className="submitBtn">Submit</button>
            </form>
        
        </div>
    )
}
export default Contact