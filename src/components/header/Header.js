import React, { useState } from 'react';
import './Header.css';
import {ReactComponent as YesymLogo} from "../assets/yesim-logo.svg";
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleBurgerClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleCloseClick = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="header-container">
            <Link to="/">
                <YesymLogo className="esync-logo"/>
            </Link>
            <div className="header-nav">
                <nav>
                    <Link className="nav-link" to="/enterprise">Internet</Link>
                    <Link className="nav-link" to="/virtualnumbers">Virtual numbers</Link>
                    <Link className="nav-link" to="/compability-devices">Compatible devices</Link>
                    <Link className="nav-link" to="/regions">More</Link>
                </nav>
            </div>
            <div className="section-header">
                <button className="header-option-button">
                    <IoIosArrowDown/> $, USD
                </button>
                <button className="header-option-button">
                    <IoIosArrowDown/> EN
                </button>
                <button className="header-option-button">
                    <IoSunny />
                </button>
                <button className="get-started-button">Sign In</button>
            </div>
            <div className="header-nav-mobile">
                <button className="sign-in-button">Sign In</button>
                <button className="burger-button" onClick={handleBurgerClick}>
                    <RxHamburgerMenu size={30}/>
                </button>
            </div>
            {sidebarOpen && (
                <div className="sidebar">
                    <button className="close-button" onClick={handleCloseClick}><FaTimes/></button>
                    <section>
                        <Link className="nav-link" to="/enterprise">Internet</Link>
                        <Link className="nav-link" to="/virtualnumbers">Virtual numbers</Link>
                        <Link className="nav-link" to="/compability-devices">Compatible devices</Link>
                        <Link className="nav-link" to="/regions">More</Link>
                    </section>
                    <button className="get-started-button">Get started</button>
                </div>
            )}
        </div>
    );
};

export default Header;