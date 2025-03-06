

import React from "react";
// Syles
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
// Project Image
import img1 from "../assets/image/linkedin.svg";
import img2 from "../assets/image/github1.png";

function Footer() {

  // Return JSX
  return (
    <footer className="footer">
      <div className="footer-left">
        Made By <span className="heart">❤️</span> Ali Asger
      </div>
      <div className="footer-right">
        <a href=' href="https://github.com/Aliasger786"' target="_blank" rel="noopener noreferrer">
          <img src={img2} className="icon" />
        </a>
        <a href='https://www.linkedin.com/in/ali-asger-kanchwala-1476661ab/' target="_blank" rel="noopener noreferrer">
          <img src={img1} className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

