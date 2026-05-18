import { useState, useEffect } from 'react'
import Card from "./Cards.jsx"
import './App.css'
import CardsHolder from "./CardsHolder.jsx";

const pokemonList = ["pikachu", "gengar", "charizard", "lucario", "lugia", "togepi"];

async function fetchPokemon(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();

  return data;
}

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  
  useEffect(() => {
    const fetchAllPokemon = async () => {
      const promises = pokemonList.map(pokemon => fetchPokemon(pokemon));
      const data = await Promise.all(promises);
      setPokemonData(data);
    };
    fetchAllPokemon();
  }, []);
  
  return (
    <>
      <CardsHolder CardsList={pokemonData} />
    </>
  )
  
}

export default App
