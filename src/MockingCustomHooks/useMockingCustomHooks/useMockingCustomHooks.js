import React, { useState } from "react";

const useMockingCustomHooks = (initState = 0) => {
  let count = initState;
  const setCount = (value) => {
    count = value;
  };
  return [count, setCount];
};
export default useMockingCustomHooks;
