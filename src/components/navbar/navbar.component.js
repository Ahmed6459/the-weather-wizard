import React from 'react';
import './navbar.style.css';
import logo from '../../photos/logo.png';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <div className="logo-img">
                    <img src={logo} alt="wizard logo"/>
                </div>
                <div className="logo-title">
                    <p>The Weather Wizard</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;