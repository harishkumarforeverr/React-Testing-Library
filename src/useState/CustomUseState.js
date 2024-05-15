import React, { useState } from "react";
import CustomHook from "./CustomHook";

const CustomUseState = () => { 
  console.log("formform",CustomHook())
  const { form, setForm } = CustomHook();
console.log("formform",form)
  const updateTheState = () => {
    setForm((prev) => {
      const newObj = {
        name: "javascript",
        age: 21,
      };
      return {
        ...prev,
        ...newObj,
      };
    });
  };
  return (
    <div>
      <h1> name : {form.name}</h1>
      <h1> age : {form.age}</h1>
      <button onClick={updateTheState}> Show </button>
    </div>
  );
};
export default CustomUseState;
