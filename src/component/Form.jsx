import React from "react";
import './form.css'
const Form = () => {
  return (
   <div className="form-container">
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <h2>Contact Us</h2>
            <form>
            <input type="text" className="field" placeholder="Full Name" required />
            <input type="email" className="field" placeholder="Email" required />
            <input type="text" className="field" placeholder="Phone Number" required />
            <textarea className="field area" placeholder="Message"></textarea>
            <button className="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Form;
