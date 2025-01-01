import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../styles/About.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <div id="about">
        <Link className="Us">About Us</Link>
        <Link className="Us">Directors Message</Link>
      </div>
    </div>
  );
};
