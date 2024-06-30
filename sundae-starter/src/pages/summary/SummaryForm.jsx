import React, {useState} from 'react'

const SummaryForm = () => {
    const [disabled, setDisabled] = useState(false);

    return (
        <div>
            <input checked={disabled} onClick={() => setDisabled(!disabled)} type="checkbox" id="diable-button-checkbox" />
            <label htmlFor="diable-button-checkbox">I agree to Terms and Conditions</label>

            <button disabled={!disabled} >Confirm Order</button>
        </div>
    )
}
export default SummaryForm;
