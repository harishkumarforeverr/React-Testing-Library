import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "./MultipleUseStateMocking";
import * as React from "react";

describe("Home component ", () => {
  it("renders welcome message", () => {
    render(<Home />);
    const welcomeElement = screen.getByText(/Welcome to the Home page!/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test("renders My Eligibility section when isELigiblityUser is true", () => {
    const { getByText, getByLabelText } = render(<Home />);

    fireEvent.click(getByLabelText("setisELigiblityUserBtn"));
  });
  test("renders My Eligibility section when increment is true", async () => {
    const { getByText, getByLabelText } = render(<Home />);
    fireEvent.click(getByLabelText("fetchData"));
  });
  test("renders My Eligibility section when increment is true", async () => {
    const { getByText, getByLabelText } = render(<Home />);
    fireEvent.click(getByLabelText("incremenet"));
  });
  test("renders My Eligibility section when increment is true", async () => {
    const { getByText, getByLabelText } = render(<Home />);
    fireEvent.click(getByLabelText("incremenet"));
    fireEvent.click(getByLabelText("incremenet"));
    fireEvent.click(getByLabelText("incremenet"));
    fireEvent.click(getByLabelText("incremenet"));
  });
});
describe("Home component", () => {
  const setState = jest.fn();
  let stateCounter = 0;
  const useStateMock = (initState) => {
    stateCounter++;
    if (stateCounter == 1) return [true, setState];
    if (typeof initState === "boolean") {
      return [initState, setState];
    }
    return [initState, jest.fn()];
  };
  beforeEach(() => {
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Is a test where we want to mock useState", () => {
    render(<Home />);
    const welcomeElement = screen.getByText(/Welcome to TaskList Pro/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});

describe("Home component -1 ", () => {
  const setState = jest.fn();
  let stateCounter = 0;
  const useStateMock = (initState) => {
    stateCounter++;
    if (stateCounter == 4) return [true, setState];
    if (typeof initState === "boolean") {
      return [initState, setState];
    }
    return [initState, jest.fn()];
  };
  beforeEach(() => {
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Is a test where we want to mock useState", () => {
    render(<Home />);
    const welcomeElement = screen.getByText(/He is my hero/i);
    expect(welcomeElement).toBeInTheDocument();
  });
});
describe("Home component -3 ", () => {
  const setState = jest.fn();
  let stateCounter = 0;
  const useStateMock = (initState) => {
    stateCounter++;
    if (stateCounter == 5) return [true, setState];
    if (typeof initState === "boolean") {
      return [initState, setState];
    }
    return [initState, jest.fn()];
  };
  beforeEach(() => {
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Is a test where we want to mock useState", () => {
    render(<Home />);
  });
});
