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
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  
  useEffect(() => {
    const fetchAllPokemon = async () => {
      const promises = pokemonList.map(pokemon => fetchPokemon(pokemon));
      const data = await Promise.all(promises);
      setPokemonData(data);
    };
    fetchAllPokemon();
  }, []);

  const handleCardClick = (pokemonId) => {
    if (clickedCards.includes(pokemonId)) {
      // Card already clicked - game over
      setScore(0);
      setClickedCards([]);
      // Optionally shuffle cards here
    } else {
      // New card clicked
      const newClickedCards = [...clickedCards, pokemonId];
      setClickedCards(newClickedCards);
      const newScore = newClickedCards.length;
      setScore(newScore);
      setBestScore(Math.max(bestScore, newScore));
    }
  };

  const shuffledPokemon = [...pokemonData].sort(() => Math.random() - 0.5);
  
  return (
    <>
      <CardsHolder CardsList={shuffledPokemon} score={score} bestScore={bestScore} onCardClick={handleCardClick} />
    </>
  )
  
}

export default App
