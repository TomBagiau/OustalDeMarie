import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../Logo_oustal-de-marie.png';
import './Navbar.css';

export default function Navbar() {
    const [active, setActive] = useState('nav_menu')
    const [toggleIcon, setToggleIcon] = useState('nav_toggler')
    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu')
        //Togler icon
        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
    }

    return (
        <nav className="nav relative"> 
        <NavLink to="/" className="nav_brand"><img src={Logo} alt="Logo oustal de Marie" className='logo'></img></NavLink>
            <ul className={active}>
                <NavLink to="/" className="nav_item hoverline">Accueil</NavLink>
                <NavLink to="/la-maison" className="nav_item hoverline">La Maison</NavLink>
                <NavLink to="/activites" className="nav_item hoverline">Activités</NavLink>
                <NavLink to="/contact" className="nav_item hoverline">Contact</NavLink>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}