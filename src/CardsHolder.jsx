import Card from './Cards.jsx'
import './CardsHolder.css'

function CardsHolder({CardsList, score, bestScore, onCardClick}){
    return (
        <div className='holder'>
            <div className='score-display'>
                <h2>Score: {score}</h2>
                <h2>Best Score: {bestScore}</h2>
            </div>
            {CardsList.map(element => (
                <Card pokemon={element} key={element.id} onCardClick={onCardClick} />
            ))}
        </div>
    )
}

export default CardsHolder;