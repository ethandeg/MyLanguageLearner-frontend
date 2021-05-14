import FlashCard from "../decksAndFlashcards/FlashCard"
import { useState } from "react"
import UserInputModule from "./UserInputModule"
const Lesson = ({ subUnit }) => {
    const [rotation, setRotation] = useState(1)
    const [currentCard, setCurrentCard] = useState(0)
    const currFlashCard = subUnit.material[currentCard]

    //have 3 rotations in state
    //first rotation cycle through words
    //second, cycle thorugh with foreign word in front
    //=> first 2 rotations, maybe have flashcard imported and set card.frontSide and card.backSide somehow
    //third, make user type in foreign word from english translation
    //=> show word, have them type, check all the translations, if wrong, compare what is wrong with first translation

    //have first lesson be simply going through all of the flash cards
    const resetCards = () => {
        setCurrentCard(0)
    }
    const changeRotation = () => {
        if (rotation < 3) {
            setRotation(rotation + 1)
            resetCards()
        } else {
            setRotation(1)
            resetCards()
        }
    }

    const nextCard = () => {
        setCurrentCard(currentCard + 1)
    }
    if (rotation === 1) return (
        <div>

            {/* {subUnit && subUnit.material.map((mat, i) => (
            <FlashCard key={i} card={{frontSide: mat.segment, backSide: mat.translation[0]}} />
        ))} */}
            {subUnit && currFlashCard
                ?
                <>
                    <FlashCard key={currentCard} card={{ frontSide: currFlashCard.translation[0], backSide: currFlashCard.segment }} />
                    <button onClick={nextCard} className="button is-info">Next Card</button>
                </>
                :
                <>
                    <h2 className="title is-2 has-text-info">Congratulations! Ready to bump up the difficulty?</h2>
                    <button onClick={resetCards} className="button is-info">Try again first!</button>
                    <button onClick={changeRotation} className="button is-primary">Let's move on!</button>
                </>
            }

        </div>

    )
    //known bug, the backside is set properly but still doesn't seem to rerender the next card right
    else if (rotation === 2) return (
        <div>

            {subUnit && currFlashCard
                ?
                <>
                    <FlashCard key={currentCard} card={{ backSide: currFlashCard.translation[0], frontSide: currFlashCard.segment }} />
                    <button onClick={nextCard} className="button is-info">Next Card</button>
                </>
                :
                <>
                    <h2 className="title is-2 has-text-info">Congratulations! Ready to bump up the difficulty?</h2>
                    <button onClick={resetCards} className="button is-info">Try again first!</button>
                    <button onClick={changeRotation} className="button is-primary">Let's move on!</button>
                </>
            }
        </div>

    )

    else if (rotation === 3) return (
        <>
            {subUnit && currFlashCard
                ?
                <>
                    <UserInputModule card={currFlashCard} nextCard={nextCard} />
                    <button onClick={changeRotation} className="button is-primary">Next Rotation</button>
                </>
                :
                <>
                    <h2 className="title is-2 has-text-info">Congratulations! You completed the subunit!</h2>
                    <button onClick={resetCards} className="button is-info">Try again first!</button>
                </>
            }

        </>
    )
    //rotation three: component name: UserInputModule
    //show a flash card or something similar, allow user text input
    //check input, highlight in red on answer where wrong, green on correct one where wrong

}

export default Lesson