import React from 'react';
import './Footer.css';
import {ReactComponent as EsyncLogo} from "../assets/yesim-logo.svg";

const Footer = () => {
    return (
        <div className="footer-container-wrapper">
            <div className="footer-container">
                <div className="footer-upper-section">
                    <div className="footer-credentials">
                        <EsyncLogo/>
                        <p>Explore a seamless blend of hosting services and crypto mining capabilities at GlobalESync</p>
                    </div>
                    <div className="footer-links-wrapper">
                        <section>
                            <h2>IMPORTANT LINKS</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact-us">Contact Us</a>
                            <a href="/agent-contact">Agent Contact</a>
                            <a href="/services">Services</a>
                        </section>
                        <section>
                            <h2>IMPORTANT LINKS</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact-us">Contact Us</a>
                            <a href="/agent-contact">Agent Contact</a>
                            <a href="/services">Services</a>
                        </section>
                        <section>
                            <h2>IMPORTANT LINKS</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact-us">Contact Us</a>
                            <a href="/agent-contact">Agent Contact</a>
                            <a href="/services">Services</a>
                        </section>
                    </div>
                </div>
                <div className="footer-bottom-section">
                    <section>
                        <a href="/terms-and-conditions">Terms and Conditions</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/">© 2023 GlobalESync. All Rights Reserved.</a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Footer;