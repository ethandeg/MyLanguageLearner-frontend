import {useState} from "react"
const FlashCard = ({card}) => {
    console.log(card)
    const [side, setSide] = useState(card.frontSide)
    console.log(side)
    const flipCard = () => {
        if(side === card.frontSide){
            setSide(card.backSide)
        } else {
            setSide(card.frontSide)
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