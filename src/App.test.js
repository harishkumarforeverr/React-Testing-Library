// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import Home from "./Home";
// import * as React from "react";

// describe("Home component ", () => {
//   it("renders welcome message", () => {
//     render(<Home />);
//     const welcomeElement = screen.getByText(/Welcome to the Home page!/i);
//     expect(welcomeElement).toBeInTheDocument();
//   });

//   test("renders My Eligibility section when isELigiblityUser is true", () => {
//     const { getByText, getByLabelText } = render(<Home />);

//     fireEvent.click(getByLabelText("setisELigiblityUserBtn"));
//   });
// });
// describe("Home component", () => {
//   const setState = jest.fn();
//   let stateCounter = 0;
//   const useStateMock = (initState) => {
//     stateCounter++;
//     if (stateCounter == 1) return [true, setState];
//     if (typeof initState === "boolean") {
//       return [initState, setState];
//     }
//     return [initState, jest.fn()];
//   };
//   beforeEach(() => {
//     jest.spyOn(React, "useState").mockImplementation(useStateMock);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("Is a test where we want to mock useState", () => {
//     render(<Home />);
//     const welcomeElement = screen.getByText(/Welcome to TaskList Pro/i);
//     expect(welcomeElement).toBeInTheDocument();
//   });
// });

// describe("Home component -1 ", () => {
//   const setState = jest.fn();
//   let stateCounter = 0;
//   const useStateMock = (initState) => {
//     stateCounter++;
//     if (stateCounter == 4) return [true, setState];
//     if (typeof initState === "boolean") {
//       return [initState, setState];
//     }
//     return [initState, jest.fn()];
//   };
//   beforeEach(() => {
//     jest.spyOn(React, "useState").mockImplementation(useStateMock);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("Is a test where we want to mock useState", () => {
//     render(<Home />);
//     const welcomeElement = screen.getByText(/He is my hero/i);
//     expect(welcomeElement).toBeInTheDocument();
//   });
// });
// describe("Home component -3 ", () => {
//   const setState = jest.fn();
//   let stateCounter = 0;
//   const useStateMock = (initState) => {
//     stateCounter++;
//     if (stateCounter == 5) return [true, setState];
//     if (typeof initState === "boolean") {
//       return [initState, setState];
//     }
//     return [initState, jest.fn()];
//   };
//   beforeEach(() => {
//     jest.spyOn(React, "useState").mockImplementation(useStateMock);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("Is a test where we want to mock useState", () => {
//     render(<Home />);
//   });
// });
 
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App component", () => {
  it("renders navigation links correctly", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("MultipleUseStateMocking")).toBeInTheDocument();
  });

  it("navigates to Home page when Home link is clicked", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Welcome to the Home page!")).toBeInTheDocument();
  });

  // Add similar test cases for navigation to About, Contact, and MultipleUseStateMocking pages
});
