import { render, screen } from "@testing-library/react";
import RamenProduct from "./index";

test("renders the title and search input", () => {
  render(<RamenProduct />);
  
  const titleElement = screen.getByText(/TOKYO RAMEN FINDER/i);
  const searchInput = screen.getByPlaceholderText(/Filter by speciality, location or keyword.../i);
  
  expect(titleElement).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});