import Card from './Cards.jsx'

function CardsHolder({CardsList}){
    return (
        <div className='holder'>
            {CardsList.map(element => (
                <Card pokemon={element} key={element.id} />
            ))}
        </div>
    )
}

export default CardsHolder;