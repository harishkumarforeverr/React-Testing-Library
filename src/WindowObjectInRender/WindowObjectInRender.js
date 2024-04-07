import React from "react";

const WindowObjectInRender = () => {
  if (window.isloading) {
    window.isloading.stopLoading();
  }
  return <div>WindowObjectInRender</div>;
};
export default WindowObjectInRender;
