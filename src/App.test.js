import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';

test('renders welcome message', () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/Welcome to the Home page!/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('increments count on button click', () => {
  render(<Home />);
  const buttonElement = screen.getByText(/Click me!/i);
  fireEvent.click(buttonElement);
  const countElement = screen.getByText(/Button clicked 1 times!/i);
  expect(countElement).toBeInTheDocument();
});

test('fetches and renders data on button click', async () => {
  const mockData = { name: 'Mock Data' };
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => mockData,
  });

  render(<Home />);
  const fetchButtonElement = screen.getByText(/Fetch Data/i);
  fireEvent.click(fetchButtonElement);

  await waitFor(() => {
    const dataElement = screen.getByText(/Mock Data/i);
    expect(dataElement).toBeInTheDocument();
  });
});
