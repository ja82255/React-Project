import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../styles/Contact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div>
      <div id="contct">
        <Link className="basic">Contact Us</Link>
        <Link className="basic">Contact For</Link>
        <Link className="basic">Placement</Link>
      </div>
    </div>
  );
};
