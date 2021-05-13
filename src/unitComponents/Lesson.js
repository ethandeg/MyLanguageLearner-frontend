import FlashCard from "../decksAndFlashcards/FlashCard"
import {useState} from "react"
import UserInputModule from "./UserInputModule"
const Lesson = ({subUnit}) => {
    const [rotation, setRotation] = useState(1)
    const [currentCard, setCurrentCard] = useState(0)
    //have 3 rotations in state
    //first rotation cycle through words
    //second, cycle thorugh with foreign word in front
    //=> first 2 rotations, maybe have flashcard imported and set card.frontSide and card.backSide somehow
    //third, make user type in foreign word from english translation
    //=> show word, have them type, check all the translations, if wrong, compare what is wrong with first translation

    //have first lesson be simply going through all of the flash cards
    const changeRotation = () => {
        console.log(rotation)
        if(rotation < 3){
            setRotation(rotation + 1)
            setCurrentCard(0)
        } else {
            setRotation(1)
            setCurrentCard(0)
        }
    }

    const nextCard = () => {
        setCurrentCard(currentCard + 1)
        console.log(currentCard)
        console.log(subUnit.material[currentCard])
    }
    if(rotation === 1 ) return (
        <div>

        {/* {subUnit && subUnit.material.map((mat, i) => (
            <FlashCard key={i} card={{frontSide: mat.segment, backSide: mat.translation[0]}} />
        ))} */}
        {subUnit && 
            <FlashCard card={{frontSide: subUnit.material[currentCard].segment, backSide: subUnit.material[currentCard].translation[0]}}/>
        }
                <button onClick={changeRotation} className="button is-primary">Next Rotation</button>
                <button onClick={nextCard} className="button is-info">Next Card</button>
        </div>

    )
    //known bug, the backside is set properly but still doesn't seem to rerender the next card right
    else if(rotation === 2) return (
        <div>

        {subUnit && 
            <FlashCard card={{backSide: subUnit.material[currentCard].segment, frontSide: subUnit.material[currentCard].translation[0]}}/>
        }
        <button onClick={changeRotation} className="button is-primary">Next Rotation</button>
        <button onClick={nextCard} className="button is-info">Next Card</button>
        </div>

    )

    else if(rotation === 3) return (
        <>
        <UserInputModule />
        <button onClick={changeRotation} className="button is-primary">Next Rotation</button>
        </>
    )
    //rotation three: component name: UserInputModule
    //show a flash card or something similar, allow user text input
    //check input, highlight in red on answer where wrong, green on correct one where wrong

}

export default Lesson