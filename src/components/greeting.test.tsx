import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greeting from "./greeting";

test("renders greeting with provided name", () => {
  render(<Greeting greet="Test User" />);
  expect(screen.getByText("Hello Test User")).toBeInTheDocument();
});

test("renders greeting with default name if no name is provided", () => {
  render(<Greeting greet="" />);
  expect(screen.getByText("Hello Guest")).toBeInTheDocument();
});
