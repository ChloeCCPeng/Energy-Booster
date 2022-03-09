import React, {useEffect, useState} from "react";
import axios from "axios";

function InspirationalQuote({saveQuote}) {
    const [quote, setQuote] = useState(["",""]);
    const [newButtonClick, setNewButtonClick] = useState(false);

    const options = {
        method: 'GET',
        url: 'https://inspiring-quotes.p.rapidapi.com/random',
        headers: {
          'x-rapidapi-host': 'inspiring-quotes.p.rapidapi.com',
          'x-rapidapi-key': '665587ffb4msh5194ff99f4e1c2dp1fd5d0jsna8fae9f2a7ea'
        }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setQuote([response.data.quote, response.data.author]);
        }).catch(function (error) {
            console.error(error);
        });
    },[newButtonClick]);

    return (
        <div>
            {`${quote[0]} -${quote[1]}`}
            <button className="bouncy" onClick={()=>saveQuote(quote[0],quote[1])}>Save</button>
            <button onClick={() => setNewButtonClick(!newButtonClick)}>New Quote</button>

        </div>
    )
}

export default InspirationalQuote;