import React from "react";
import { types } from "../utils/types";

function Pokemon({ pokemon }) {
  const renderPokemon = pokemon.map((pokemon) => (
    <div className="column is-3-desktop is-4-tablet is-4" key={pokemon.id}>
      <div className="card pokemon-card">
        <h3 className="title is-3">{pokemon.name.french}</h3>
        <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={`${pokemon.name.french}`}
          width="100px"
        />
        <div>
          {pokemon.type.map((item, index) => (
            <p
              style={{ backgroundColor: types[item].color }}
              className={`button is-rounded is-primary has-margin-5 is-hovered`}
              key={index}
            >
              {types[item].name}
            </p>
          ))}
        </div>
      </div>
    </div>
  ));
  return <div className="columns is-multiline ">{renderPokemon}</div>;
}

export default Pokemon;
