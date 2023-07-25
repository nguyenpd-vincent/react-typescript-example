import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from "react-router-dom";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test("renders home page", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Assuming your Home component renders some content with the class "home-content"
  const homeContentElement = screen.getByTestId("home-content");
  expect(homeContentElement).toBeInTheDocument();
});