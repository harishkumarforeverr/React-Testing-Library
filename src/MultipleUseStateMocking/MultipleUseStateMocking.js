import React, { useEffect, useState } from "react";

const MultipleUseStateMocking = () => {
  const NameConstant = "HARISH";
  const [isELigiblityUser, setisELigiblityUser] = useState(false);
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
    console.log("im clicked",value)
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
  const fetchData = () => {
    setLoading(true);
    setError(null);
    setData("okay");
    setLoading(false);
  }; 
  const renderMyEligibility = () => {
    if (!isELigiblityUser && loading)
      return (
        <div>
          <h1> He is my hero</h1>
        </div>
      );
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Welcome to TaskList Pro</h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Enter your email address to get started
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="name@yourcompany.com"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
            Continue with Email
          </button>
          <div className="flex justify-center mb-4">
            <span className="mx-2 text-gray-500">OR</span>
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-2">
            Continue with Google
          </button>
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-800 rounded shadow">
            Continue with Apple
          </button>
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Already have an account? Sign In
            </a>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <h2>Welcome to the Home page! : -- {NameConstant}</h2>
      <p>{message}</p>
      <button aria-label="incremenet" onClick={handleClick}>Click me!</button>
      <p>{handleSwitch(count)}</p>
      <button aria-label="fetchData" onClick={fetchData}>
        Fetch Data
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <pre>{data}</pre>}
      <button
        onClick={() => {
          setisELigiblityUser(false);
        }}
        aria-label="setisELigiblityUserBtn"
      >
        {" "}
        Hide My Eligibity{" "}
      </button>
      {renderMyEligibility()}
    </div>
  );
};

export default MultipleUseStateMocking;
