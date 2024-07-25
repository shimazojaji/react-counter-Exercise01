import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Counter from "../features/Counter";

describe("integration testing ", () => {
  test("Rest testing", () => {
    render(<Counter />);
    const resetBtn = screen.getByRole("button", { name: "Reset" });
    fireEvent.click(resetBtn);
    const counterValue = screen.getByTestId("counter");

    expect(counterValue).toHaveTextContent("0");
  });

  test("increment testing", () => {
    render(<Counter />);
    const incBtn = screen.getByRole("button", { name: "+" });
    fireEvent.click(incBtn);
    const counterValue = screen.getByTestId("counter");

    expect(counterValue).toHaveTextContent("1");
  });

  test("decrement testing", () => {
    render(<Counter />);
    const decBtn = screen.getByRole("button", { name: "-" });
    fireEvent.click(decBtn);
    const counterValue = screen.getByTestId("counter");

    expect(counterValue).toHaveTextContent("-1");
  });
});
