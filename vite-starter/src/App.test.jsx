import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers.js";

test("button click flow", () => {
    render(<App/>);

    const button = screen.getByRole("button", {name: /blue/i});
    expect(button).toHaveClass("red");

    fireEvent.click(button);
    expect(button).toHaveClass("blue");
    expect(button).toHaveTextContent(/red/i);
    // expect(button).toHaveStyle({"background-color": "blue"});

    const checkbox = screen.getByRole("checkbox", {name: /disable button/i});
    fireEvent.click(checkbox);
    expect(button).toHaveClass("gray");

    fireEvent.click(checkbox);
    expect(button).toHaveClass("blue");
})

test("checkbox flow", () => {
    render(<App/>);

    const button = screen.getByRole("button", {name: /blue/i});
    const checkbox = screen.getByRole("checkbox", {name: /disable button/i});

    expect(button).toBeEnabled();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
    expect(button).toHaveClass("gray");

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
    expect(button).toHaveClass("red");
})

describe("kebabCaseToTitleCase", () => {
    test("works for no hyphens", () => {
        expect(kebabCaseToTitleCase("red")).toBe("Red");
    });

    test("works for one hyphens", () => {
        expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
    });
    test("works for multiple hyphens", () => {
        expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
    });
})