import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <h2>About Me</h2>
      <p>
        Welcome to my portfolio! I'm
        <span className="highlights"> Harish Kumar</span>, a
        <span className="highlights"> Front end web developer</span> based in
        Chennai, Tamil Nadu. With a passion for web development and computer
        science background, I thrive on turning creative ideas into tangible
        realities.
      </p>
      <p>
        My journey in web development began in my college days, and since then,
        I've been dedicated to mastering the latest technologies and best
        practices in the field. From{" "}
        <span className="highlights">HTML5, CSS3, and JavaScript </span> to
        modern frameworks like <span className="highlights"> React.JS</span>, I
        thrive on staying at the forefront of industry trends and techniques.
      </p>
      <p>
        Beyond my technical skills, I value{" "}
        <span className="highlights"> collaboration and communication </span>. I
        believe that the best results are achieved through open dialogue and a
        shared vision. By fostering strong relationships with clients and
        colleagues alike, I ensure that every project is a collaborative
        success.
      </p>
      <p>
        This portfolio is a testament to my journey so far—a showcase of my
        skills, experiences, and the passion that drives me. Whether you're here
        to explore my work or to discuss potential collaborations, I'm excited
        to connect and explore how we can create something remarkable together.
      </p>
      <p>
        Thank you for visiting, and I look forward to the{" "}
        <span className="highlights"> opportunity to work with you!</span>
      </p>
    </div>
  );
}

export default About;
