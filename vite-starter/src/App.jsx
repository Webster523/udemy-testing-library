import "./App.css";
import {useState} from "react";

function App() {
    const [buttonColour, setButtonColour] = useState("red");
    const nextColour = buttonColour === "red" ? "blue" : "red";
    const [disabled, setDisabled] = useState(false);

    return (
        <div>
            <button disabled={disabled} className={buttonColour} onClick={() => setButtonColour((nextColour))}>Change
                to {nextColour}</button>

            <input type="checkbox" id="disable-button-checkbox" checked={disabled} onChange={() => setDisabled((!disabled))} />
            <label htmlFor="disable-button-checkbox">Disable Button</label>
        </div>
    );
}

export default App;
