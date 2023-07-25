import React from 'react';
import { render, screen } from '@testing-library/react';
import RamenProduct from './index';
import { MemoryRouter } from "react-router-dom";

test('renders learn react link', () => {
  render(<RamenProduct />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});