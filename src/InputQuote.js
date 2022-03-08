import React, {useState} from "react";

function InputQuote({saveQuote}) {
    const [formState, setFormState] = useState({});
    function submitHelper(e) {
        e.preventDefault();
        saveQuote(formState.text, formState.type);
    }

    function updateForm(e) {
        console.log(e.target.value)
        const formData = {...formState,[e.target.name]: e.target.value};
        setFormState(formData);
    }

    return (
        <form onSubmit={(e) => submitHelper(e)} >
            <label>Submit a quote to be saved to your quote list: </label>
            <label>Type: 
                <input type="text" name="type" onChange={(e) => updateForm(e)} />
            </label>
            <label>Quote: 
                <input type="text" name="text" onChange={(e) => updateForm(e)} />
            </label>
            <label>Author: 
                <input type="text" name="text" onChange={(e) => updateForm(e)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default InputQuote;