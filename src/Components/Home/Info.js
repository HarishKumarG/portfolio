import React from "react";
import image from "../../Assests/Images/image harish.png"
import "./Info.css";
import Home from "../Home/Home";

function Info() {
  return (
    <>
      <div className="Info">
        <div className="image">
          <img src={image} alt="Harish Kumar" />
        </div>
        <div className="text">
          <h2>Hi There!</h2>
          <h2>
            I'm <strong className="name">Harish Kumar</strong>
          </h2>
          <h3>Front-End Web Developer | Web Designer | Student</h3>
        </div>
      </div>
      <Home />
    </>
  );
}

export default Info;
