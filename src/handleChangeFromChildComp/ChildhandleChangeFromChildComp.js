import React from "react";

const ChildhandleChangeFromChildComp = ({ handlePageChange }) => {
  return (
    <div>
      <button
      aria-label="handlePageChange"
        onClick={() => {
          handlePageChange(10);
        }}
      >
        click me
      </button>
    </div>
  );
};
export default ChildhandleChangeFromChildComp;
