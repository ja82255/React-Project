import React from "react";
import Header from "./components/Header";
import "../src/App.css";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Courses } from "./components/Courses";
import { Careers } from "./components/Careers";
import { FranchiseOpportunity } from "./components/FranchiseOpportunity";
import { Interprises } from "./components/Enterprises";
import InputForm from "../src/components/InputForm";

import { useEffect, useState } from "react";
import LoginModal from "../src/components/LoginModal";
import ShowData from "./components/ShowData";




export const App = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Show the modal on page load
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header />

      <div className="bg-container">
        <Routes>
          <Route path="/" element={""} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/enterprises" element={<Interprises />} />
          <Route path="/franchise" element={<FranchiseOpportunity />} />
          <Route path="/showdata" element={<ShowData/>} />
       
          
        </Routes>

        <InputForm />

        {showModal && <LoginModal onClose={handleClose} />}
      </div>
      
    </div>
  );
};
