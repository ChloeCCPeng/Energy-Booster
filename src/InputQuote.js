import React from "react";

function InputQuote() {
    function submitPlaceholder(e) {
        e.preventDefault();
        console.log("tots gonna do something with your quote!");
    }

    return (
        <form onSubmit={submitPlaceholder} >
            <label>Submit a quote to be saved to your quote list: </label>
            <label>Quote
                <input type="text" name="quote" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default InputQuote;