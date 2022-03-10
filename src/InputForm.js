import React, {useState} from "react";

function InputForm({saveQuote, saveJoke}) {
    const [formState, setFormState] = useState({category: "joke", text1: "", text2: ""});
    function submitHelper(e) {
        e.preventDefault();
        if (formState.category==="joke") {
            saveJoke(formState.text1, formState.text2);
        } else {
            saveQuote(formState.text1, formState.text2);
        }
        setFormState({category: "joke", text1: "", text2: ""});
        e.target.reset();
    }

    function updateForm(e) {
        console.log(e.target.value)
        const formData = {...formState,[e.target.name]: e.target.value};
        setFormState(formData);
    }

    return (
        <form onSubmit={(e) => submitHelper(e)} >
            <label>Submit a quote or joke: </label>
            <br></br>
            <label>Type: 
                <select className="bouncy" name="category" onChange={(e) => updateForm(e)}>
                    <option value="joke">Joke</option>
                    <option value="quote">Quote</option>
                </select>
            </label>
            <label>{formState.category==="quote" ? "Quote: " : "Setup: "}
                <input type="text" name="text1" onChange={(e) => updateForm(e)} />
            </label>
            <label>{formState.category==="quote" ? "Author: " : "Punchline: "}
                <input type="text" name="text2" onChange={(e) => updateForm(e)} />
            </label>
            <input className="bouncy" type="submit" value="Submit" />
        </form>
    )
}

export default InputForm;