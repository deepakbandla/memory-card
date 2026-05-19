import './Cards.css'

function Card({ pokemon, onCardClick }) {
    let types = '';
    if (pokemon.types) {
        types = pokemon.types.map((t) => t.type.name).join(', ');
    }

    let abilities = '';
    if (pokemon.abilities) {
        abilities = pokemon.abilities.map((a) => a.ability.name).join(', ');
    }

    return (
        <button className="card" onClick={() => onCardClick(pokemon.id)}>
            <div className="pic">
                <img src={pokemon.sprites?.other?.["official-artwork"]?.front_default} alt={pokemon.name} />
            </div>
            <div className="name">
                <h1>{pokemon.name}</h1>
            </div>
            <div className="details">
                <h3>Types: {types}</h3>
                <h3>Abilities: {abilities}</h3>
            </div>
        </button>
    );
}

export default Card;