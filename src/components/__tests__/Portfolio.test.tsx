// import { render } from "@testing-library/react";
// import Portfolio from "../Portfolio";

const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    area: 20,
    wallColor: "white",
  },
};

const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    wallColor: expect.stringMatching(/white|yellow/),
  },
};

test("the house has my desired features", () => {
  expect(houseForSale).toMatchObject(desiredHouse);
});

// test("should render home component", () => {
//   render(<Home />);
//   const h1 = screen.getByTitle("h1");
//   expect(h1).toHaveText;
// });
