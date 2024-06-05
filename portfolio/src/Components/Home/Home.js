import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h2>
        Let me <span className="introduce">Introduce</span> Myself
      </h2>
      <div className="Home-para">
        <div className="Home-para-list">
          <p>
            <span className="highlight">Front-End Web Developer</span> who turns
            coffee into code and designs into delightful user experiences.
          </p>
        </div>
        <div className="Home-para-list">
          <p>
            Skilled in{" "}
            <span className="highlight">
              {" "}
              HTML, CSS, React and Javascript frameworks{" "}
            </span>{" "}
            making the web a prettier place.
          </p>
        </div>
        <div className="Home-para-list">
          <p>
            Lifelong learner and{" "}
            <span className="highlight">tech enthusiast</span>, always on the
            hunt for the latest trends and best practices.
          </p>
        </div>
        <div className="Home-para-list">
          <p>
            Dedicated to crafting top-notch projects while sprinkling a bit of
            humor and fun along the way!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
