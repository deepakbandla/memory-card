import { useState, useEffect } from "react";

function Card({ pokemon }) {
    let types = '';
    if (pokemon.types) {
        types = pokemon.types.map((t) => t.type.name).join(', ');
    }

    let abilities = '';
    if (pokemon.abilities) {
        abilities = pokemon.abilities.map((a) => a.ability.name).join(', ');
    }

    return (
        <div className="card">
            <div className="pic">
                <img src={pokemon.sprites?.other?.["official-artwork"]?.front_default} />
            </div>
            <div className="name">
                <h1>{pokemon.name}</h1>
            </div>
            <div className="details">
                <h3>Types: {types}</h3>
                <h3>Abilities: {abilities}</h3>
            </div>
        </div>
    );
}

export default Card;