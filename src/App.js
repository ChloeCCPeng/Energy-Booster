//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
// import styled, { ThemeProvider } from "styled-components";

import DevJoke from './DevJoke';
import InputQuote from './InputQuote';
import InspirationalQuote from './InspirationalQuote';
import JokeList from './JokeList';
import KanyeQuote from './KanyeQuote';
import NavBar from './NavBar';
import QuoteList from './QuoteList';

function App() {
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [savedJokes, setSavedJokes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/quotes')
    .then((response) => response.json())
    .then((data) => setSavedQuotes(data))
  },[]);

  useEffect(() => {
    fetch('http://localhost:4000/jokes')
    .then((response) => response.json())
    .then((data) => setSavedJokes(data))
  },[]);

  function saveQuote(text, author) {
    const obj = {text: text, author: author};
    fetch('http://localhost:4000/quotes', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(obj)
    })
    .then((response) => response.json())
    .then((quote) => setSavedQuotes([...savedQuotes,quote]))
  }

  function saveJoke(question, punchline) {
    const joke = {question: question, punchline: punchline};
    fetch('http://localhost:4000/jokes', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(joke)
    })
    .then((response) => response.json())
    .then((joke) => setSavedJokes([...savedJokes,joke]))
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

  function deleteJoke(id) {
    fetch(`http://localhost:4000/jokes/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .then(() => {
      const updatedJokes = savedJokes.filter((joke) => joke.id !== id);
      setSavedJokes(updatedJokes);
    })
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div class="home-div">
            <QuoteList savedQuotes={savedQuotes} deleteQuote={deleteQuote} class="home-quote-div"/>
            <img src="./funny.gif" alt="funny" class="home-image"></img>
            <JokeList savedJokes={savedJokes} deleteJoke={deleteJoke} class="home-joke-div"/>
          </div>
        </Route>
        <Route exact path="/getjokes">
          <DevJoke saveJoke={saveJoke} />
        </Route>
        <Route exact path="/kanyequote">
          <KanyeQuote saveQuote={saveQuote} />
        </Route>
        <Route exact path="/inspirationalquote">
          <InspirationalQuote saveQuote={saveQuote} />
        </Route>
        <Route exact path="/inputquote">
          <InputQuote saveJoke={saveJoke} saveQuote={saveQuote} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
