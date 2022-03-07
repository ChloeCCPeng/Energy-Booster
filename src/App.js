//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import InputQuote from './InputQuote';
import InspirationalQuote from './InspirationalQuote';
import KanyeQuote from './KanyeQuote';
import NavBar from './NavBar';
import QuoteList from './QuoteList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <QuoteList />
        </Route>
        <Route exact path="/kanyequote">
          <KanyeQuote />
        </Route>
        <Route exact path="/getinspired">
          <InspirationalQuote />
        </Route>
        <Route exact path="/inputquote">
          <InputQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
