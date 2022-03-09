import React, {useEffect, useState} from "react";

function KanyeQuote({saveQuote}) {
    const [kanyeQuote, setKanyeQuote] = useState("");
    const [newButtonClick, setNewButtonClick] = useState(false);

    useEffect(() => {
        fetch('https://api.kanye.rest/')
        .then((response) => response.json())
        .then((data) => setKanyeQuote(data.quote))
    },[newButtonClick]);

    return (
        <div>
            {kanyeQuote}
            <button className="bouncy" onClick={()=>saveQuote(kanyeQuote,"Kanye")}>Save</button>
            <button onClick={() => setNewButtonClick(!newButtonClick)}>New Quote</button>
        </div>
    )
}

export default KanyeQuote;