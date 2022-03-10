import React from "react";
import Quote from "./Quote";

function QuoteList({ savedQuotes, deleteQuote }) {
    const quotesJsx = savedQuotes.map((quote) => <Quote key={quote.id} quote={quote} deleteQuote={deleteQuote} />)
    return (
        <div>
            <h2>Quote List</h2>
            <div class="whiteboard-quote">
                {quotesJsx}
            </div>
        </div>
 
    )
}

export default QuoteList;