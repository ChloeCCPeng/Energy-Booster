import React, {useState} from "react";

function Joke ({joke, deleteJoke}) {
    const {id, question, punchline} = joke;
    const [showPunchline, setShowPunchline] = useState(false);
  
    return (
        <div className="stickynotes">
            <i className='thumbtack' onClick={() => deleteJoke(id)}>📌</i>
            <p onClick={() => setShowPunchline(!showPunchline)}>{`Setup: ${question}`}</p>
            <p>{showPunchline ? `Punchline: ${punchline}` : ""}</p>
        </div>
    )
}

export default Joke;