import React, {useEffect} from "react";
import axios from "axios";

function InspirationalQuote() {
    /*
    useEffect(() => {
        fetch('https://inspiration.goprogram.ai')
        .then((response) => response.json())
        .then((quote) => console.log(quote.txt))
    })
    */
    useEffect(() => {
        axios.get('https://www.affirmations.dev/', {
            headers: {'Accept': 'application/json','path': '/'}
        })
        .then((response) => console.log(response))
    })
    return (
        <div>Gonna be an inspirational quote</div>
    )
}

export default InspirationalQuote;