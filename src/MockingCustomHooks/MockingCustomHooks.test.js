import React from "react";
import { fireEvent, render } from "@testing-library/react";
import MockingCustomHooks from "./MockingCustomHooks";

jest.mock("./useMockingCustomHooks/useMockingCustomHooks", () => {
  let mockIndex = -1;
  return () => {
    mockIndex++;
    return [mockIndex, jest.fn()];
  };
});

describe("MockingCustomHooks", () => {
  test("testing useMockingCustomHooks with mock 1", () => {
    render(<MockingCustomHooks />);
  });
  test("testing useMockingCustomHooks with mock 2", () => {
    render(<MockingCustomHooks />);
  });
  test("testing useMockingCustomHooks with mock 3", () => {
    render(<MockingCustomHooks />);
  });
  test("testing useMockingCustomHooks with mock 41", () => {
    render(<MockingCustomHooks />);
  });
  test("testing useMockingCustomHooks with mock 25", () => {
    render(<MockingCustomHooks />);
  });
  test("testing useMockingCustomHooks with mock 26", () => {
    render(<MockingCustomHooks />);
  });
  test("testing useMockingCustomHooks with mock 27", () => {
    render(<MockingCustomHooks />);
  });
  test("testing useMockingCustomHooks with mock 2", () => {
    const { getByLabelText } = render(<MockingCustomHooks />);
    fireEvent.click(getByLabelText("incremenet"));
  });
});
