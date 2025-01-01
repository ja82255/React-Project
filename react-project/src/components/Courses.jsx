import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../styles/courses.css";
import { Link } from "react-router-dom";

export const Courses = () => {
  return (
    <div>
      <div id="course">
        <Link className="basic">Basic Programming</Link>
        <Link className="basic">Java Programming</Link>
        <Link className="basic">Web Development</Link>
        <Link className="basic">Mobile App</Link>
        <Link className="basic">Python</Link>
      </div>
    </div>
  );
};
