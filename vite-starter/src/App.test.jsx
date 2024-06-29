import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";

describe('button click flow', () => {
    test("button starts with correct colour and text", () => {
        render(<App/>);

        const button = screen.getByRole("button", {name: /blue/i});

        expect(button).toHaveClass("red");
    });

    test("button has correct colour and text after click", () => {
        render(<App/>);

        const button = screen.getByRole("button", {name: /blue/i});
        fireEvent.click(button);

        expect(button).toHaveClass("blue");
        expect(button).toHaveTextContent(/red/i);

        // expect(button).toHaveStyle({"background-color": "blue"});
    })
});


