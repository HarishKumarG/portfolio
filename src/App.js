import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Expertise from "./Components/Expertise/Expertise";
import Contact from "./Components/Contact/Contact";
import Footer from "./Footer";
import Info from "./Components/Home/Info";

function App() {
  return (
    <Router>
      <div className="App">
              <Header />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
