import { render, screen } from "@testing-library/react";

import Contact from "../Contact";

test("to render contact page", () => {
  render(<Contact />);
  expect(screen.findByRole("input", { name: /submit/ }));
});
