import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CustomUseState from "./CustomUseState";
import CustomHook from "./CustomHook";

jest.mock("./CustomHook", () => ({
  __esModule: true,
  default: jest.fn(() => {}),
}));

describe("CustomUseState component", () => {
  it("updates state correctly on button click", () => {
    const setFormMock = jest.fn((value) => {
      value({ name: "javascript", age: 21 });
    });
    CustomHook.mockImplementation(() => ({
      form: { name: "", age: 0 },
      setForm: setFormMock,
    }));

    render(<CustomUseState />);
    const showButton = screen.getByText("Show");

    fireEvent.click(showButton);
  });
});
