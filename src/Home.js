import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  const NameConstant = "HARISH";
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let message;
  if (count === 0) {
    message = "Click the button to start!";
  } else if (count === 1) {
    message = "Button clicked once!";
  } else {
    message = `Button clicked ${count} times!`;
  }

  // switch
  const handleSwitch = (value) => {
    switch (value) {
      case 1:
        return "Value is 1";
      case 2:
        return "Value is 2";
      default:
        return "Value is unknown";
    }
  };

  // onClick
  const handleClick = () => {
    setCount(count + 1);
  };

  // axios
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setData("okay");
    setLoading(false);
  };

  return (
    <div>
      <h2>Welcome to the Home page! : -- {NameConstant}</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Click me!</button>
      <p>{handleSwitch(count)}</p>
      <button aria-label="fetchData" onClick={fetchData}>
        Fetch Data
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <pre>{data}</pre>}
    </div>
  );
};

export default Home;
