import React from "react";

function Joke ({joke, deleteJoke}) {
    const {id, question, punchline} = joke;
    return (
        <div>
            <p>{`Setup: ${question}`}</p>
            <p>{`Punchline: ${punchline}`}</p>
            <button onClick={() => deleteJoke(id)} >Delete</button>
        </div>
    )
}

export default Joke;