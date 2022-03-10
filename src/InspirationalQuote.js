import React, {useEffect, useState} from "react";
import axios from "axios";

function InspirationalQuote({saveQuote}) {
    const [quote, setQuote] = useState(["",""]);
    const [newButtonClick, setNewButtonClick] = useState(false);
    const [saveButtonClick, setSaveButtonClick] = useState(false);

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


    function handleSave() {
        if (!saveButtonClick) {
            saveQuote(quote[0],quote[1]);
            setSaveButtonClick(true);
        }
    }

    function handleNew() {
        setNewButtonClick(!newButtonClick);
        setSaveButtonClick(false);
    }

    return (
        <div>
            {`${quote[0]} -${quote[1]}`}
            <button className={saveButtonClick ? "bouncy saved" : "bouncy" } onClick={handleSave}>{saveButtonClick ? "Saved" : "Save"}</button>
            <button onClick={handleNew} className="bouncy">New Quote</button>

        </div>
    )
}

export default InspirationalQuote;