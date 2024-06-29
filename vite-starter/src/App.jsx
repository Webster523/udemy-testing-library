import "./App.css";
import {useState} from "react";

function App() {
    const [buttonColour, setButtonColour] = useState("red");
    const nextColour = buttonColour === "red" ? "blue" : "red";

    return (
        <div>
            <button className={buttonColour} onClick={() => setButtonColour((nextColour))}>Change
                to {nextColour}</button>
        </div>
    );
}

export default App;
