/*
services.jsx
Jalen Mendonca - 301098614
2024

portfolio_jm
*/

import React from "react";
import './services.css';
import GraphicDesign from '../../assets/graphicdesign.jpg'
import cyborg1 from '../../assets/cyborg1.jpg';
import skateboardVideo from '../../assets/rockwallie.mp4';


const Services = () => {

    return (
        <section id='services'>
            <span className="servicesTitle">Services</span>
            <span className="servicesDesc">I am a skilled web designer with experience in creating visually appealing and user-friendly websites. I am proficient in HTML, CSS, Javascript, and Python as well as open source design softwares for graphic and video processing. <br>
            </br>
            
            </span>
            <div className="servicesBars">
                <div className="servicesBar">
                    <div className="servicesBarText">
                        <h2>Web Design</h2>
                        <p>I can create responsive and unique web applications tailored to your needs.</p>
                    </div>
                </div>
            </div>

            <div className="servicesBars">
                <div className="servicesBar">
                <img src={GraphicDesign} alt="" className="servicesBarImg" />
                    <div className="servicesBarText">
                        <h2>Graphic Design and Concept Art</h2>
                        <p>Being proficient in the latest advancements in AI artwork, I can provide high quality images for use towards any project you are working on. I specialize in fantasy themed video game concept artwork. These images can help to shape projects from the design phase of development.</p>
                    </div>
                </div>
                <img src={cyborg1} alt="Cyborg" className="cyborg1"></img> 
                <div className="imgCaption"><p>Concept Art
                </p>
                </div>             

            </div>
            <div className="servicesBars">
                <div className="servicesBar">
                    <div className="servicesBarText">
                        <h2>Skateboarding Services</h2>
                        <p>As a skateboarder of over 15 years, I have honed the craft of technical trick skateboarding. It is my passion.<br>
                        </br>
                        I can provide content creation or coaching and instructional services related to street and vert skateboarding.
                        </p>
                    </div>
                </div>
                <video className="skateboardVideo" src={skateboardVideo} autoPlay loop muted />
                <div className="vidCaption"><p>Jalen Mendonca wallies a rock.</p>
                </div>
            </div>
        </section>
    );

}

export default Services;