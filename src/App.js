//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';

import InputQuote from './InputQuote';
import InspirationalQuote from './InspirationalQuote';
import KanyeQuote from './KanyeQuote';
import NavBar from './NavBar';
import QuoteList from './QuoteList';

function App() {
  const [savedQuotes, setSavedQuotes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/quotes')
    .then((response) => response.json())
    .then((data) => setSavedQuotes(data))
  },[]);

  function saveQuote(text, type) {
    const obj = {text: text, type: type};
    fetch('http://localhost:4000/quotes', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then((response) => response.json())
    .then((quote) => setSavedQuotes([...savedQuotes,quote]))
  }

  function deleteQuote(id) {
    fetch(`http://localhost:4000/quotes/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .then(() => {
      const updatedQuotes = savedQuotes.filter((quote) => quote.id !== id);
      setSavedQuotes(updatedQuotes);
    })
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <QuoteList savedQuotes={savedQuotes} deleteQuote={deleteQuote} />
        </Route>
        <Route exact path="/kanyequote">
          <KanyeQuote saveQuote={saveQuote} />
        </Route>
        <Route exact path="/inspirationalquote">
          <InspirationalQuote />
        </Route>
        <Route exact path="/inputquote">
          <InputQuote saveQuote={saveQuote} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
