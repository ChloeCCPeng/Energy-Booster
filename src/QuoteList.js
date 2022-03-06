import React from "react";
import Quote from "./Quote";

function QuoteList() {
    const fakeProps = ["Quote1", "Quote2", "Quote3", "Quote4"];
    const quotesJsx = fakeProps.map((quote) => <Quote key={quote} text={quote} />)
    return (
        <div>
            <h2>Quote List</h2>
            {quotesJsx}
        </div>
    )
}

export default QuoteList;