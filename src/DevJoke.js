import React, {useEffect, useState} from "react";
import axios from 'axios';

function DevJoke({saveJoke}) {
    const [joke, setJoke] = useState(["", ""]);
    const [newButtonClick, setNewButtonClick] = useState(false);
    const [saveButtonClick, setSaveButtonClick] = useState(false);
    
    useEffect(() => {
        axios.get('https://backend-omega-seven.vercel.app/api/getjoke')
        .then((response) => setJoke([response.data[0].question, response.data[0].punchline]))
    },[newButtonClick]);

    function handleSave() {
        if (!saveButtonClick) {
            saveJoke(joke[0],joke[1]);
            setSaveButtonClick(true);
        }
    }

    function handleNew() {
        setNewButtonClick(!newButtonClick);
        setSaveButtonClick(false);
    }

    return (
        <div>
            <p>{`Setup: ${joke[0]}`}</p>
            <p>{`Punchline: ${joke[1]}`}</p>
            <button className={saveButtonClick ? "bouncy saved" : "bouncy" } onClick={handleSave}>{saveButtonClick ? "Saved" : "Save"}</button>
            <button onClick={handleNew} className="bouncy">New Joke</button>
        </div>
    )
}

export default DevJoke;