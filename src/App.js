import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MultipleUseStateMocking from "./MultipleUseStateMocking/MultipleUseStateMocking";
import MockingCustomHooks from "./MockingCustomHooks/MockingCustomHooks";
import TryCatchBlock from "./Try Catch Block/TryCatchBlock";
import WindowObjectInRender from "./WindowObjectInRender/windowObjectInRender";
import ParenthandleChangeFromChildComp from "./handleChangeFromChildComp/ParenthandleChangeFromChildComp";

// Component for Home page

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
            <li>
              <Link to="/MultipleUseStateMocking">MultipleUseStateMocking</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes using Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/MultipleUseStateMocking"
            element={<MultipleUseStateMocking />}
          />
          <Route
            path="/MockingCustomHooks"
            element={<MockingCustomHooks />}
          />
          <Route
            path="/TryCatchBlock"
            element={<TryCatchBlock />}
          />
          <Route
            path="/WindowObjectInRender"
            element={<WindowObjectInRender />}
          />
          <Route
            path="/ParenthandleChangeFromChildComp"
            element={<ParenthandleChangeFromChildComp />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
