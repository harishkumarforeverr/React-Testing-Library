import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./Home"; 

// Component for Home page



// Component for About page
const About = () => (
  <div>
    <h2>About Us</h2>
    <p>This is the About page.</p>
  </div>
);

// Component for Contact page
const Contact = () => (
  <div>
    <h2>Contact Us</h2>
    <p>This is the Contact page.</p>
  </div>
);

// Main App component
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes using Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
