import "./App.css";
import {useState} from "react";
import {kebabCaseToTitleCase} from "./helpers.js";

function App() {
    const [buttonColour, setButtonColour] = useState("medium-violet-red");
    const [disabled, setDisabled] = useState(false);
    const nextColour = buttonColour === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
    const className = disabled ? "gray" : buttonColour;

    return (
        <div>
            <button disabled={disabled} className={className} onClick={() => setButtonColour((nextColour))}>Change
                to {kebabCaseToTitleCase(nextColour)}</button>

            <input type="checkbox" id="disable-button-checkbox" checked={disabled}
                   onChange={() => setDisabled((!disabled))}/>
            <label htmlFor="disable-button-checkbox">Disable Button</label>
        </div>
    );
}

export default App;
