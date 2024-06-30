import {fireEvent, render, screen} from "@testing-library/react";
import SummaryForm from "../summary/SummaryForm.jsx";
import userEvent from "@testing-library/user-event";

test("initial conditions", () => {
    render(<SummaryForm/>);

    const checkbox = screen.getByRole("checkbox", {name: /terms and conditions/i});
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button", {name: /confirm order/i});
    expect(button).toBeDisabled();
})

test("checkbox enables button on first click and disables on second click", async () => {
    const user = userEvent.setup();

    render(<SummaryForm/>);

    const checkbox = screen.getByRole("checkbox", {name: /terms and conditions/i});
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button", {name: /confirm order/i});
    expect(button).toBeDisabled();

    await user.click(checkbox);
    expect(button).toBeEnabled();

    await user.click(checkbox);
    expect(button).toBeDisabled();
})
