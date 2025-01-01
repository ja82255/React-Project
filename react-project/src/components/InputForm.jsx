import React from "react";
import "../styles/InputForm.css";
const InputForm = () => {
  return (
    <div>
      <form className="form-input">
        <label htmlFor="name">Your Name*</label>
        <input type="text" id="name" placeholder="Please Enter your Name" />
        <label htmlFor="name">Phone Number*</label>
        <input type="text" id="name" placeholder="PLease Enter your Number" />
        <label htmlFor="name">Course in Interested*</label>
        <input type="text" id="name" placeholder="Select Course" />
        <label htmlFor="name">Your Message*</label>
        <textarea type="text" id="name" placeholder="Write Your Message" />

        <button className="btn">Submit Now</button>
      </form>
    </div>
  );
};

export default InputForm;
