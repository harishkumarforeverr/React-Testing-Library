import React, { useEffect, useState } from "react";
import getPromise from "./getPromise ";

const TryCatchBlock = () => {
  const promise = getPromise();
  const [state1, setState1] = useState(null);
  const [state2, setState2] = useState(null);
  const [state3, setState3] = useState(null);
  const [loading, setLoading] = useState(false);
  const promise1 = async () => {
    setLoading(true);
    try {
      const res = await promise.getPromise1(false);
      console.log("resresresres",  res);
      setState1(res.data);
    } catch (err) {
      setState1(err.message);
    }
    setLoading(false);
  };
  const promise2 = async () => {
    setLoading(true);
    try {
      const res = await promise.getPromise2(true);
      setState2(res.data);
    } catch (err) {
      setState2(err.message);
    }
    setLoading(false);
  };
  const promise3 = async () => {
    setLoading(true);
    try {
      const res = await promise.getPromise3(true);
      setState3(res.data);
    } catch (err) {
      setState3(err.message);
    }
    setLoading(false);
  };
  return (
    <div>
      {loading && <h1> Loading</h1>}
      <div>
        <h1>
          {" "}
          State 1 :{state1}{" "}
          <button
            onClick={() => {
              promise1();
            }}
            aria-label="refreshButton1"
          >
            {" "}
            Refresh
          </button>
        </h1>
        <h1>
          {" "}
          State 2 :{state2}{" "}
          <button
            onClick={() => {
              promise2();
            }}
            aria-label="refreshButton2"
          >
            {" "}
            Refresh
          </button>
        </h1>
        <h1>
          {" "}
          State 3 :{state3}{" "}
          <button
            onClick={() => {
              promise3();
            }}
            aria-label="refreshButton3"
          >
            {" "}
            Refresh
          </button>
        </h1>
      </div>
    </div>
  );
};
export default TryCatchBlock;
