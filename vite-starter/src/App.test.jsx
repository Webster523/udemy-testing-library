import { render, screen } from "@testing-library/react";
import App from "./App";

test("button starts with correct colour and text", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /blue/i });
  expect(button).toHaveClass("red");
});


