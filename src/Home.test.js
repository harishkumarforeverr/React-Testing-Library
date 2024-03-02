import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "./Home";

test("renders welcome message", () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/Welcome to the Home page!/i);
  expect(welcomeElement).toBeInTheDocument();
});

test("displays correct message after button click", () => {
  render(<Home />);
  const button = screen.getByText("Click me!");

  // Click the button once
  fireEvent.click(button);

  // Assert that the message changes
  const clickedOnceMessage = screen.getByText("Button clicked once!");
  expect(clickedOnceMessage).toBeInTheDocument();
});

test("displays correct message after button click", () => {
  render(<Home />);
  const button = screen.getByText("Click me!");

  // Click the button multiple times
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  // Assert that the message changes
  const clickedMultipleTimesMessage = screen.getByText("Button clicked 3 times!");
  expect(clickedMultipleTimesMessage).toBeInTheDocument();
});


test("displays fetched data after button click", async () => {
  render(<Home />);
  const button = screen.getByLabelText("fetchData");
  fireEvent.click(button); 
  
  // Assert that loading state is not displayed
  expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

  // Assert that "okay" message is displayed
  expect(screen.getByText("okay")).toBeInTheDocument();
});