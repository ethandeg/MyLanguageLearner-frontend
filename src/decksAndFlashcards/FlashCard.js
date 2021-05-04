import {useState} from "react"
const FlashCard = ({card}) => {
    const [side, setSide] = useState(card.front_side)
    const flipCard = () => {
        if(side === card.front_side){
            setSide(card.back_side)
        } else {
            setSide(card.front_side)
        }
    }
    return (
        <div className="column" onClick={flipCard} style={{cursor: "pointer"}}>
            <div className="card py-6">
                <div className="card-content has-text-centered">
                    {side}
                </div>
            </div>
        </div>
    )
}

export default FlashCard