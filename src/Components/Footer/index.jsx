import React from 'react';
import './style.scss';
import { FaLinkedin, FaHackerrank, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="Footer">
      {/* Left Section */}
      <div className="Footer__left">
        <h1>Get in Touch</h1>
        <div className="Footer__left__email">
          <p>legala.varshith@gmail.com</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="Footer__right">
        <div className="Footer__right__Links">
          {/* LinkedIn */}
          <a
            className="Footer__right__Links__item"
            href="https://www.linkedin.com/in/varsithreddylegala/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* HackerRank */}
          <a
            className="Footer__right__Links__item"
            href="https://www.hackerrank.com/legala_varsith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHackerrank />
          </a>
          {/* GitHub */}
          <a
            className="Footer__right__Links__item"
            href="https://github.com/Varshith2007hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
