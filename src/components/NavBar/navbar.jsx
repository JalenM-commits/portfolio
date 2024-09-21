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
                <Link activeClass='active' to='home' className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='aboutme' className="desktopMenuListItem">About Me</Link>
                <Link activeClass='active' to='projects' className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='services' className="desktopMenuListItem">Services</Link>
            </div>

            <Link to="/contact">
            <button className="desktopMenuBtn">
                <img src={mailbox} alt="mailbox" className='desktopMenuImg'/>Contact Me
            </button>
            </Link>


                <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='home' className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='aboutme' className="ListItem" onClick={()=>setShowMenu(false)}>About Me</Link>
                <Link activeClass='active' to='projects' className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='services' className="ListItem" onClick={()=>setShowMenu(false)}>Services</Link>
                <Link activeClass='active' to='contact' className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>

            </nav>

            )
}

export default Navbar