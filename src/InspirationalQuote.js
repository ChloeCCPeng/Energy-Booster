import React, {useEffect} from "react";

function InspirationalQuote() {
    useEffect(() => {
        fetch('https://inspiration.goprogram.ai')
        .then((response) => response.json())
        .then((quote) => console.log(quote.txt))
    })
    return (
        <div>Gonna be an inspirational quote</div>
    )
}

export default InspirationalQuote;