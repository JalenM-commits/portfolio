/*
projects.jsx
Jalen Mendonca - 301098614
2024

portfolio_jm
*/

import React from "react";
import './projects.css';
import ProjectsImg from '../../assets/projectsexample.jpg'
import { Link } from 'react-router-dom';


const Projects = () => {
    return(
        <section id="projects">
            
            <h2 className="projectsTitle">My Projects</h2>
            
        <div className="tiles-container">
            <div className="tile">
            <div className="tileContent">
                <h2>Shader Project</h2>
                <h3>Coming Soon...</h3>
            </div>
            </div>

            <div className="tile">
            <div className="tileContent">
                <h2>Music Compositon/Audio Engineering</h2>
                <h3>Instrumental Production</h3>
                <p>
                I am currently working towards releasing music on digital streaming platforms. I have completed several Ableton-Live projects that are now in the final stages of mastering. I am now in the pre content release phase of developing and marketing myself as a musical artist. 
                </p>
                <img src={ProjectsImg} alt="" className="projectsImg" />
            </div>
            </div>

            <div className="tile">
                <div className="tileContent">
                <h2>Youtube Project</h2>
                <h3>Gameplay Video</h3>
                <p className="videoPara">I played through my favourite video game on the hardest difficulty.
                    This involved over 2 hours of gameplay footage, not including cutscenes.
                    It took multiple days of effort to record and perfect this cinematic gameplay.</p>
            </div>
            <iframe className="vidEmbed" width="560" height="315" src="https://www.youtube.com/embed/Da6kh7YtAEs?si=1KFNnem3bTZgpP-D&amp;start=5580" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>               

            </div>
        </div>
                
            
            
            <Link to="/services"><btn className="servicesBtn">Services</btn>
            </Link>
        </section>
    )
}

export default Projects