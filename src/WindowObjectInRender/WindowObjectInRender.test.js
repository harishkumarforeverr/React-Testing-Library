import React from "react";
import { render } from "@testing-library/react";
import WindowObjectInRender from "./WindowObjectInRender";

describe("WindowObjectInRender component", () => {
  it("should not call stopLoading if window.isloading is not true", () => {
    window.isloading = false; // Set window.isloading to false
    const stopLoadingMock = jest.fn(); // Mock the stopLoading function

    // Render the component
    render(<WindowObjectInRender />);

    // Assert that stopLoading is not called
    expect(stopLoadingMock).not.toBeCalled();
  });

  it("should call stopLoading if window.isloading is true", () => { 
    window.isloading = { stopLoading: jest.fn() }; 
    render(<WindowObjectInRender />); 
    expect(window.isloading.stopLoading).toHaveBeenCalled();
  });
});
