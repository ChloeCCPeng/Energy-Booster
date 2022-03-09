import React, {useEffect, useState} from "react";
import axios from 'axios';

function DevJoke({saveJoke}) {
    const [joke, setJoke] = useState(["", ""]);
    const [buttonClick, setButtonClick] = useState(false);

    useEffect(() => {
        axios.get('https://backend-omega-seven.vercel.app/api/getjoke')
        .then((response) => setJoke([response.data[0].question, response.data[0].punchline]))
    },[buttonClick]);

    return (
        <div>
            <p>{`Setup: ${joke[0]}`}</p>
            <p>{`Punchline: ${joke[1]}`}</p>
            <button onClick={()=> saveJoke(joke[0], joke[1])}>Save</button>
            <button onClick={() => setButtonClick(!buttonClick)}>New Joke</button>
        </div>
    )
}

export default DevJoke;