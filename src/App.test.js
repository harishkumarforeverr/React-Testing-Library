import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "./Home";

test("renders welcome message", () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/Welcome to the Home page!/i);
  expect(welcomeElement).toBeInTheDocument();
});

 