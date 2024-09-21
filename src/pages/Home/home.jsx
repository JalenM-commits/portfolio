import React from "react";
import './home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
            
        <section id="homePage" >
            
            <div className="background" >
            <div className="homeContent">

                <span className="welcome">Welcome to the</span>
                <span className="homeText"> Portfolio Website of <br> 
                </br>
                <span className="homeName"> Jalen Mendonca.</span> </span>
                <span className="missionStatement">Mission Statement:</span>
                <p className="homePara">As a dedicated and innovative web and graphic designer, I am committed to creating visually engaging and user-friendly digital experiences. Utilizing my expertise in stable diffusion tools, I strive to deliver high-quality designs that effectively communicate my clients' messages and captivate their audiences. Through continuous learning and collaboration with industry professionals, I aim to push the boundaries of design while maintaining a strong focus on functionality and accessibility. My goal is to provide exceptional value and exceed expectations, making every interaction a memorable one for my clients and their customers.</p>
                
                
                <Link to='/aboutme'><button className="btn">About Me </button></Link>
            </div>
            </div>
            
        </section>
    )
}

export default Home;