import React from "react";
import logo from "../assets/logo.png";

import { Link } from "react-router-dom";

import "../styles/Header.css";

// import { whyJoinUs } from './whyJoinUs';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="components">
        <Link to="/about" className="about">
          About
        
        </Link>
        <Link to="/courses" className="courses">
          Courses
        </Link>
        <Link to="/contact" className="contact">
          Contact
        </Link>
        <Link to="/careers" className="careers">
          Careers
        </Link>

        <Link to="/enterprises" className="enterprises">
          Enterprises
        </Link>

        <Link to="/franchise" className="franchice">
          Franchice Opportunity
        </Link>
        <Link to="/showdata" className="showdata">
          Show Data
        </Link>
      </div>
    </nav>
  );
};

export default Header;
