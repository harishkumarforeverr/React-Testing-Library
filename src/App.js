import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Component for Home page
const Home = () => (
  <div>
    <h2>Welcome to the Home page!</h2>
  </div>
);

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
const App = () => (
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

      {/* Define routes */}
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
