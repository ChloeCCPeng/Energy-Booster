import React from "react";

function Quote ({quote, deleteQuote}) {
    const {id, text, author} = quote;
    return (
        <div className="stickynotes">
            <i className='thumbtack' onClick={() => deleteQuote(id)}>📌</i>
            {`${text}- ${author}`}
        </div>
    )
}

export default Quote;