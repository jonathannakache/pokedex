import React from "react";
import { pokemonList } from "../utils/pokemonList";
import Pokemon from "./Pokemon";

function GetPokemon({ filter }) {
  const filterPokemon = pokemonList.filter((item) =>
    item.name.french.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Pokemon pokemon={filterPokemon} />
    </div>
  );
}

export default GetPokemon;
