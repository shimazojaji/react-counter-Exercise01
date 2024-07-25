import { test } from "vitest";
import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../features/Counter";

describe("unit testing,screen dubug", () => {
  test("App Component Test", () => {
    render(<App />);
    screen.debug();
  });

  test("Counter Component Test", () => {
    render(<Counter />);
    screen.debug();
  });
});
