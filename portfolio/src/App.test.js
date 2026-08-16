import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("opens the portfolio menu and shows sections", async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.click(screen.getByRole("button", { name: /menu/i }));

  expect(screen.getAllByRole("link", { name: /home/i }).length).toBeGreaterThan(0);
  expect(screen.getAllByRole("link", { name: /work/i }).length).toBeGreaterThan(0);
  expect(screen.getAllByRole("link", { name: /about/i }).length).toBeGreaterThan(0);
});
