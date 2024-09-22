/*
navbar.jsx
Jalen Mendonca - 301098614
2024

portfolio_jm
*/

import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import mailbox from '../../assets/mailbox.jpg'
import { Link } from 'react-router-dom';
import menu from '../../assets/menu-bar.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="navbar">

            <Link to="/">
            <img src={logo} alt='Logo' className='logo' />
            </Link>
            <div className="desktopMenu">
                <Link to='home' className="desktopMenuListItem"><button className='desktopMenuBtn'>Home</button></Link>
                <Link to='aboutme' className="desktopMenuListItem"><button className='desktopMenuBtn'>About Me</button></Link>
                <Link to='projects' className="desktopMenuListItem"><button className='desktopMenuBtn'>Projects</button></Link>
                <Link to='services' className="desktopMenuListItem"><button className='desktopMenuBtn'>Services</button></Link>
                <Link to="contact" className="desktopMenuListItem"><button className='desktopMenuBtn'>
                    <img src={mailbox} alt="mailbox" className='desktopMenuImg'/>Contact Me
                    </button>
                </Link>
            </div>

                <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link to='home' className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link to='aboutme' className="ListItem" onClick={()=>setShowMenu(false)}>About Me</Link>
                <Link to='projects' className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link to='services' className="ListItem" onClick={()=>setShowMenu(false)}>Services</Link>
                <Link to='contact' className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>

            </nav>

            )
}

export default Navbar