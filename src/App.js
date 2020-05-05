import React, { useState } from "react";
import "./App.css";
import "bulma-helpers/css/bulma-helpers.min.css";
import "bulma/css/bulma.css";
import Input from "./components/Input";
import GetPokemon from "./components/GetPokemon";

function App() {
  const [pokemon, setPokemon] = useState("");
  return (
    <div className="App">
      <div className="container">
        <h1 className="title is-1 has-margin-15">Pokédex</h1>
        <Input pokemon={(pokemon) => setPokemon(pokemon)} />
        <GetPokemon filter={pokemon} />
      </div>
    </div>
  );
}

export default App;
