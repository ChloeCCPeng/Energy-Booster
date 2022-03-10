import React from "react";
import Joke from "./Joke";

function JokeList({ savedJokes, deleteJoke }) {
    // const className="stickynotes"
    const jokesJsx = savedJokes.map((joke) => <Joke key={joke.id} joke={joke} deleteJoke={deleteJoke}/>)
    return (
        <div>
            <h2>Joke List</h2>
            <div class="whiteboard-joke">{jokesJsx}</div>
        </div>
    )
}

export default JokeList;