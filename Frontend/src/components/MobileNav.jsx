import React from "react";
import "./MobileNav.css";
import { Link } from "react-scroll";

export const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className="mobile-menu-container">
        
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} className='menu-item'>Home</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className='menu-item'>Skills</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className='menu-item'>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className='menu-item'>Contact me</Link>
          </li>
          <button className="contact-btn" onClick={() => { }}>
            Hire Me
          </button>
        </ul>
      </div>
    </div>
  );
};
