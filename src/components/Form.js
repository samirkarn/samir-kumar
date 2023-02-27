import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <div className="form-heading">
        <h1>Get In Touch</h1>
      </div>
      <div className="form">
        <form action="https://formspree.io/f/xqkoprzv" method="post" target="_blank">
          <label>Your Name</label>
          <input type="text" name="your-name"></input>
          <label>Email</label>
          <input type="email" name="email"></input>
          <label>Subject</label>
          <input type="text" name="subject"></input>
          <label>Mobile Number</label>
          <input type="number" name="number"></input>
          <label>Message</label>
          <textarea rows="6" name="message" placeholder="Type your message here"></textarea>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
