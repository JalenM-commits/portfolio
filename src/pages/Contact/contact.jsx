/*
contact.jsx
Jalen Mendonca - 301098614
2024

portfolio_jm
*/

import React from "react";
import "./contact.css"

const Contact = () => {
    return (
        <div className="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out this form to discuss any work opportunities.</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name"/>
                <input type="email" className="email" placeholder="Your Email"/>
                <textarea className="msg" name="message" rows={5} placeholder="Your Message"></textarea>
                <button type="submit" value='send' className="submitBtn">Submit</button>
            </form>
        
        </div>
    )
}
export default Contact