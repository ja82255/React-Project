// src/LoginModal.js
import "../../src/styles/LoginModal.css";
import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {app} from "../Firebase";

import { useNavigate } from "react-router-dom";
import ShowData from "./ShowData";

const LoginModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore(app)



    try {

      const docRef = await addDoc(collection(db, "Users"), {
        name: name,
        phone: phone,
        course: course,
        createdAt: new Date(),
        
        
      });
      
console.log(docRef,docRef.id);
navigate('/showdata');


    } catch (error) {
      console.error("Error adding document: ", error);
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div>Contact Us </div>

        <form onSubmit={handleSubmit} className="input-form">
          <label>Full Name*</label>
          <input
            type="text"
            //  value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Contact Number*</label>
          <input
            type="number"
            // value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label>Courses in Interested*</label>
          <input
            type="text"
            // value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />

          <button type="submit" className="btn-submit" >
            Submit
          </button>
          <button type="button" className="btn-close" onClick={onClose}>
            X
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
