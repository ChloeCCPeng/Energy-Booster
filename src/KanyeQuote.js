import React, {useEffect, useState} from "react";

function KanyeQuote({saveQuote}) {
    const [kanyeQuote, setKanyeQuote] = useState("");
    const [newButtonClick, setNewButtonClick] = useState(false);
    const [saveButtonClick, setSaveButtonClick] = useState(false);

    useEffect(() => {
        fetch('https://api.kanye.rest/')
        .then((response) => response.json())
        .then((data) => setKanyeQuote(data.quote))
    },[newButtonClick]);

    function handleSave() {
        if (!saveButtonClick) {
            saveQuote(kanyeQuote,"Kanye");
            setSaveButtonClick(true);
        }
    }

    function handleNew() {
        setNewButtonClick(!newButtonClick);
        setSaveButtonClick(false);
    }

    return (
        <div>
            {`${kanyeQuote} -Kanye`}
            <button className={saveButtonClick ? "bouncy saved" : "bouncy" } onClick={handleSave}>{saveButtonClick ? "Saved" : "Save"}</button>
            <button onClick={handleNew} className="bouncy">New Quote</button>
        </div>
    )
}

export default KanyeQuote;