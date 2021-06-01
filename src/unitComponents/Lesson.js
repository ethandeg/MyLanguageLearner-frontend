import FlashCard from "../decksAndFlashcards/FlashCard"
import { useState} from "react"
import UserInputModule from "./UserInputModule"
import {useDispatch, useSelector} from "react-redux"
import {postExperience, finishLesson} from "../actions/actions"
import {useParams, useHistory} from "react-router-dom"

const Lesson = ({ subUnit }) => {
    const {languageCode} = useParams()
    const history = useHistory()
    const username = useSelector(state => state.userInfo.username)
    const dispatch = useDispatch()
    const [rotation, setRotation] = useState(1)
    const [currentCard, setCurrentCard] = useState(0)
    const currFlashCard = subUnit.material[currentCard]
    const [rightAnswers, setRightAnswers] = useState({questions:0, correct:0})
    //have 3 rotations in state
    //first rotation cycle through words
    //second, cycle thorugh with foreign word in front
    //=> first 2 rotations, maybe have flashcard imported and set card.frontSide and card.backSide somehow
    //third, make user type in foreign word from english translation
    //=> show word, have them type, check all the translations, if wrong, compare what is wrong with first translation

    //have first lesson be simply going through all of the flash cards
    // useEffect(() => {
    //     if(finished){
    //         completeLesson()
    //     }
    // }, [finished])
    const resetCards = () => {
        setCurrentCard(0)
        setRightAnswers({questions: 0, correct:0})
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

    const gotItRight = () => {
        const {questions, correct} = rightAnswers
        setRightAnswers({questions: questions + 1, correct: correct + 1})
    }

    const gotItWrong = () => {
        const {questions, correct} = rightAnswers
        setRightAnswers({questions: questions +1, correct})
    }

    const completeLesson = () => {
        const {questions, correct} = rightAnswers;
        dispatch(postExperience(username, correct))
        console.log(correct/questions * 100)
        if(correct/questions * 100 > 80){
            dispatch(finishLesson(username, languageCode, +subUnit.subUnit))
        }
        history.push(`/learn/${languageCode}`)
    }

    if (rotation === 1) return (
        <div>


            {subUnit && currFlashCard
                ?
                <div className="columns">
                    <div className="column is-one-quarter"></div>
                    <div className="column is-half">
                    <FlashCard key={currentCard} card={{ frontSide: currFlashCard.translation[0], backSide: currFlashCard.segment }} />
                    <button onClick={nextCard} className="button is-info">Next Card</button>
                    </div>
                    <div className="column is-one-quarter"></div>

                </div>
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
                <div className="columns">
                    <div className="column is-one-quarter"></div>
                    <div className="column is-half">
                    <FlashCard key={currentCard} card={{ backSide: currFlashCard.translation[0], frontSide: currFlashCard.segment }} />
                    <button onClick={nextCard} className="button is-info">Next Card</button>
                    </div>
                    <div className="column is-one-quarter"></div>

                </div>
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
                <div className="columns">
                    <div className="column is-one-quarter"></div>
                    <div className="column is-two-half">
                    <UserInputModule card={currFlashCard} nextCard={nextCard} gotItRight={gotItRight} gotItWrong={gotItWrong}/>

                    </div>
                    <div className="column is-one-quarter"></div>

                </div>
                :
                <>
                    <h2 className="title is-2 has-text-info">Congratulations! You completed the subunit!</h2>

                    <button onClick={completeLesson} className="button is-success is-outlined">Claim EXP</button>

                    <p>Questions: {rightAnswers.questions}</p>
                    <p>Correct Answers: {rightAnswers.correct}</p>
                </>
            }

        </>
    )
    //rotation three: component name: UserInputModule
    //show a flash card or something similar, allow user text input
    //check input, highlight in red on answer where wrong, green on correct one where wrong

}

export default Lesson