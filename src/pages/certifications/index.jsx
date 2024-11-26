import React from "react";
import data from "./utils.js";
import "./style.scss";

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h1 className="certifications-title">My Certifications</h1>
      <div className="certifications-grid">
        {data.certificate.map((cert, index) => (
          <div className="certification-card" key={index}>
            <h3 className="cert-title">{cert.title}</h3>
            <img src={cert.path}
              alt={cert.title}
              className="cert-image"
            />
            <a
              href={cert.certlink}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-button"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
