import React from "react";
import ChildhandleChangeFromChildComp from "./ChildhandleChangeFromChildComp";

const ParenthandleChangeFromChildComp = () => {
  const handlePageChange = (count) => {
    console.log("ParenthandleChangeFromChildComp");
  };
  const childComponentIsNotAcceptingThisFunAndOptinal = () => {
    console.log("childComponentIsNotAcceptingThisFunAndOptinal");
  };
  return (
    <div>
      <ChildhandleChangeFromChildComp
        childComponentIsNotAcceptingThisFunAndOptinal={
          childComponentIsNotAcceptingThisFunAndOptinal
        }
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
export default ParenthandleChangeFromChildComp;
