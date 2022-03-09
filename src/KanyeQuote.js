import React, {useEffect, useState} from "react";

function KanyeQuote({saveQuote}) {
    const [kanyeQuote, setKanyeQuote] = useState("");
    const [buttonClick, setButtonClick] = useState(false);

    useEffect(() => {
        fetch('https://api.kanye.rest/')
        .then((response) => response.json())
        .then((data) => setKanyeQuote(data.quote))
    },[buttonClick]);

    return (
        <div>
            {kanyeQuote}
            <button class="bouncy" onClick={()=>saveQuote(kanyeQuote,"kanye")}>Save</button>
            <button onClick={() => setButtonClick(!buttonClick)}>New Quote</button>
        </div>
    )
}

export default KanyeQuote;