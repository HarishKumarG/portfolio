import React from "react";
import "./Expertise.css";

function Expertise() {
  const certifications = [
    {
      name: "Meta Front-End Developer Professional Certificate",
      description:
        "Pursued an intensive front-end development course offered by Meta. Covering topics include HTML, CSS, JavaScript, React, and modern front-end development practices.",
      link: "https://coursera.org/share/53737ed8d773042ac6ddeb3984d43740",
    },
    {
      name: "Machine Learning Specialisation Course",
      description:
        "Completed a specialization course in Machine Learning offered by Stanford University. Topics covered include supervised learning, unsupervised learning, neural networks, and deep learning.",
      link: "https://coursera.org/share/ce11cd428fe3668f8e967efd44f594bc",
    },
    {
      name: "AI-ML Virtual Internship Training Program",
      description:
        "Developed and implemented a computer vision algorithm using Python and OpenCV, improving object recognition accuracy by 25 percent. Conducted comprehensive research on AI’s practical applications in healthcare and finance, Utilized Python,TensorFlow, and Keras to build and train AI models, resulting in a 10 percent increase in prediction accuracy.",
      link: "https://drive.google.com/file/d/1-WBHr4e4Fott-zOne5RFG3bDp3Y_Miy9/view?usp=sharing",
    },
  ];

  return (
    <div className="expertise">
      <h2>My Expertise</h2>
      <h3>Certifications</h3>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="certification-item">
            <h4 className="cert-title">{cert.name}</h4>
            <p className="cert-description">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </li>
        ))}
      </ul>
      <h3>Skills</h3>
      <ul className="skills-list">
        <li>Programming Languages: HTML, CSS, JavaScript, C, CPP, Python</li>
        <li>Technologies: React.js, Bootstrap, Node.js, NLP, CSS Flexbox, Git,
        Flutter, AWS cloud Concepts: Front-end development, Web development,
        Artificial Intelligence, Machine Learning, Version Control, GitHub, Web
        Design, Neural Networks, API, Data Analytics, Database Management Soft</li>
        <li>Skills: Communication, Listening, Negotiation, Diligence, Engagement</li>
        <li>Languages: English, Tamil</li>
      </ul>
    </div>
  );
}

export default Expertise;
