import React from "react";
import "./Contact.css";
import img1 from "../assets/image/contact-img.svg"; // Import the CSS file

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        {/* Left Side - Image */}
        <div className="contact-image">
          <img src={img1} alt="Space Theme" />
        </div>

        {/* Right Side - Form */}
        <div className="form-box">
          <h1>GET IN TOUCH</h1>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="Enter Title here" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="What you want to know?"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
