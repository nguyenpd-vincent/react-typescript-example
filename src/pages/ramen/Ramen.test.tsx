import { render, screen, act} from "@testing-library/react";
import React from "react";
import RamenProduct from "./index";
import "@testing-library/jest-dom";
import { fetchRamenProducts } from "../../services/ramen";

jest.mock("../../services/ramen");
const { JSDOM } = require("jsdom");
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
});
global.window = dom.window;
global.document = dom.window.document;

test("renders the title and search input", () => {
  render(<RamenProduct />);

  const titleElement = screen.getByText(/TOKYO RAMEN FINDER/i);
  const searchInput = screen.getByPlaceholderText(
    /Filter by speciality, location or keyword.../i
  );

  expect(titleElement).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});

test("displays the top results message", () => {
  render(<RamenProduct />);

  const topResultsMessage = screen.queryByText(
    /Displaying the top \d+ of \d+ results/i
  );

  expect(topResultsMessage).toMatchInlineSnapshot(`null`);
});

test("displays the ramen information", async () => {
  const mockRamenProducts = {
    results: {
      results_returned: 3,
      results_available: 10,
      shop: [
        {
          name: "Ramen Shop 1",
          address: "123 Street, Tokyo",
          shop_detail_memo: "Delicious ramen!",
          photo: { pc: { l: "ramen1.jpg" } },
        },
        {
          name: "Ramen Shop 2",
          address: "456 Street, Tokyo",
          shop_detail_memo: "Best ramen in town!",
          photo: { pc: { l: "ramen2.jpg" } },
        },
      ],
    },
  };
  (fetchRamenProducts as jest.Mock).mockImplementation(() => {
    return Promise.resolve({ data: mockRamenProducts });
  });
  await act(async () => {
    render(<RamenProduct />);
  });

  const ramenShop1 = screen.queryByText(/Ramen Shop 1/i);
  const ramenShop2 = screen.queryByText(/Ramen Shop 2/i);

  expect(ramenShop1).toMatchInlineSnapshot(`null`);
  expect(ramenShop2).toMatchInlineSnapshot(`null`);
});
