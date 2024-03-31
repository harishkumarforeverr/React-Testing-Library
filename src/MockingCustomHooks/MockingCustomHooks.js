import React from "react";
import useMockingCustomHooks from "./useMockingCustomHooks/useMockingCustomHooks";

const MockingCustomHooks = () => {
  const [count, setCount] = useMockingCustomHooks(0);
  console.log("countcount", count);
  if (count == 0) {
    return <h1>Count : 0</h1>;
  }
  if (count == 1) {
    return <h1>Count : 1</h1>;
  }
  if (count == 2) {
    return <h1>Count : 2</h1>;
  }
  if (count == 3) {
    return <h1>Count : 3</h1>;
  }
  if (count == 4) {
    return <h1>Count : 4</h1>;
  }
  if (count == 5) {
    return <h1>Count : 5</h1>;
  }
  return (
    <div>
      <h1> No Count</h1>
      <button
        onClick={() => {
          setCount(90);
        }}
        aria-label="incremenet"
      >
        {" "}
        incremenet
      </button>
    </div>
  );
};
export default MockingCustomHooks;
