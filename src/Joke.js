import React, {useState} from "react";

function Joke ({joke, deleteJoke}) {
    const {id, question, punchline} = joke;
    const [showPunchline, setShowPunchline] = useState(false);

    return (
        <div className="stickynotes">
            <div onClick={() => setShowPunchline(!showPunchline)}>{`Setup: ${question}`}</div>
            <p>{showPunchline ? `Punchline: ${punchline}` : ""}</p>
            <button onClick={() => deleteJoke(id)}>Delete</button>
        </div>
    )
}

export default Joke;