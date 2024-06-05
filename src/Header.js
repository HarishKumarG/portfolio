import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="Header">
      <h1>Welcome to my Portfolio</h1>
      <div className={`Menu-link ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={closeMenu}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/expertise" onClick={closeMenu}>
              Expertise
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
}

export default Header;
