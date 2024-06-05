import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="Resume">
      <h2>Resume</h2>
      <p>Download my resume to know more about my experience and skills.</p>
      <a
        href={`${process.env.PUBLIC_URL}/Resume.pdf`}
        download="HarishKumar_Resume.pdf"
      >
        <button>Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;
