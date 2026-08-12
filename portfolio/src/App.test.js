import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders maintenance message", () => {
  render(<App />);
  const title = screen.getByText(/portfolio in maintenance/i);
  expect(title).toBeInTheDocument();
});
