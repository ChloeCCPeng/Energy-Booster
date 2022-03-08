import React, {useEffect, useState} from "react";

function KanyeQuote({saveQuote}) {
    const [kanyeQuote, setKanyeQuote] = useState("");

    useEffect(() => {
        fetch('https://api.kanye.rest/')
        .then((response) => response.json())
        .then((data) => setKanyeQuote(data.quote))
    },[]);

    return (
        <div>
            {kanyeQuote}
            <button onClick={()=>saveQuote(kanyeQuote,"kanye")}>Save</button>
        </div>
    )
}

export default KanyeQuote;