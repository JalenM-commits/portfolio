/*
aboutme.jsx
Jalen Mendonca - 301098614
2024

portfolio_jm
*/

import React from "react";
import './aboutme.css'
import portrait1 from '../../assets/portrait.png'
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <section id="aboutMePage">
             <img src={portrait1} alt="JM" className="portrait" />
            
            <div className="aboutContent">
                <span className="hello">Hello, </span>
                <span className="aboutText">it's <span className="aboutName"> Jalen Mendonca.</span> <br>
                </br> 
                I am a <br></br>
                Programmer/Designer. </span>
                <p className="aboutPara">I am a Canadian web designer with experience creating stunning graphics. I have been a gamer for as long as I can remember, therefore I have always been interested in information technology and it's creative outlets. 
                    I have experience coding in C#, Java, and Python. I am well versed in several computer applications for graphic design, video editing, music production, and image generation.
                </p>
                <Link to='/projects'><button className="btn" >Projects</button></Link>
            </div>
        </section>
    )
}

export default AboutMe;