import React from "react";
import Quote from "./Quote";

function QuoteList({ savedQuotes, deleteQuote }) {
    const quotesJsx = savedQuotes.map((quote) => <Quote key={quote.id} quote={quote} deleteQuote={deleteQuote} />)
    return (
        <div>
            <h2>Quote List</h2>
            {quotesJsx}
        </div>
    )
}

export default QuoteList;