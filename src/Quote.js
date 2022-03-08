import React from "react";

function Quote ({quote, deleteQuote}) {
    const {id, text, type} = quote;
    return (
        <div>
            {`${text}- ${type}`}
            <button onClick={() => deleteQuote(id)}>Delete</button>
        </div>
    )
}

export default Quote;