import React from "react";
import Joke from "./Joke";

function JokeList({ savedJokes, deleteJoke }) {
    const jokesJsx = savedJokes.map((joke) => <Joke key={joke.id} joke={joke} deleteJoke={deleteJoke} />)
    return (
        <div>
            <h2>Joke List</h2>
            {jokesJsx}
        </div>
    )
}

export default JokeList;