import React, {useEffect, useState} from "react";
import axios from 'axios';

function DevJoke({saveJoke}) {
    const [joke, setJoke] = useState({question: "", punchline: ""});
    const [buttonClick, setButtonClick] = useState(false);

    useEffect(() => {
        axios.get('https://backend-omega-seven.vercel.app/api/getjoke')
        .then((response) => setJoke({question: response.data[0].question, punchline: response.data[0].punchline}))
    },[buttonClick]);

    return (
        <div>
            <p>{`Setup: ${joke.question}`}</p>
            <p>{`Punchline: ${joke.punchline}`}</p>
            <button onClick={()=> saveJoke(joke)}>Save</button>
            <button onClick={() => setButtonClick(!buttonClick)}>New Joke</button>
        </div>
    )
}

export default DevJoke;