import FlashCard from "../decksAndFlashcards/FlashCard"
import { useState} from "react"
import UserInputModule from "./UserInputModule"
import {useDispatch, useSelector} from "react-redux"
import {postExperience, finishLesson} from "../actions/actions"
import {useParams, useHistory} from "react-router-dom"
import Message from "../utilityComponents/Message"
const Lesson = ({ subUnit, timer, message }) => {
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
        timer(true)
        message((<Message bodyClass="is-primary has-text-centered" content="Correct!!!"/>))
    }

    const gotItWrong = () => {
        const {questions, correct} = rightAnswers
        setRightAnswers({questions: questions +1, correct})
        timer(true)
        message((<Message bodyClass="is-danger has-text-centered" content="Not quite unfortunately.."/>))
    }

    const completeLesson = () => {
        try {
            const {questions, correct} = rightAnswers;
            dispatch(postExperience(username, correct))
            if(correct/questions * 100 > 80){
                dispatch(finishLesson(username, languageCode, +subUnit.subUnit))
                timer(true)
                message(<Message bodyClass="is-success has-text-centered" content={`Congratulations! you passed with a total of ${correct/questions * 100 }%`}/>)
            } else {
                timer(true)
                message(<Message bodyClass="is-danger has-text-centered" content={`Sorry, to pass you need at least an 80%, you only got ${correct/questions * 100 }%`}/>)
            }
            history.push(`/learn/${languageCode}`)
        } catch(e){
            timer(true)
            message((<Message bodyClass="is-danger has-text-centered" content="Something went wrong unfortunately..."/>))
        }

    }

    if (rotation === 1) return (
        <div className="my-6">


            {subUnit && currFlashCard
                ?
                
                <div className="columns">
                    <div className="column is-one-quarter"></div>
                    <div className="column is-half">
                    <FlashCard key={currentCard} card={{ frontSide: currFlashCard.translation[0], backSide: currFlashCard.segment }} />
                    <button onClick={nextCard} className="button is-info is-small mt-3" style={{float: 'right'}}>Next Card</button>
                    </div>
                    <div className="column is-one-quarter"></div>

                </div>
                :

                <div className="container has-text-centered">
                    <h2 className="title is-2 has-text-info">Congratulations! Ready to bump up the difficulty?</h2>
                    <button onClick={resetCards} className="button is-info mr-2">Try again first!</button>
                    
                    <button onClick={changeRotation} className="button is-primary ml-2">Let's move on!</button>
                </div>

            }

        </div>
        

    )
    //known bug, the backside is set properly but still doesn't seem to rerender the next card right
    else if (rotation === 2) return (
        <div className="my-6">


            {subUnit && currFlashCard
                ?
                
                <div className="columns">
                    <div className="column is-one-quarter"></div>
                    <div className="column is-half">
                    <FlashCard key={currentCard} card={{ backSide: currFlashCard.translation[0], frontSide: currFlashCard.segment }} />
                    <button onClick={nextCard} className="button is-info is-small mt-3" style={{float: 'right'}}>Next Card</button>
                    </div>
                    <div className="column is-one-quarter"></div>

                </div>
                :

                <div className="container has-text-centered">
                    <h2 className="title is-2 has-text-info">Congratulations! Ready to bump up the difficulty?</h2>
                    <button onClick={resetCards} className="button is-info mr-2">Try again first!</button>
                    
                    <button onClick={changeRotation} className="button is-primary ml-2">Let's move on!</button>
                </div>

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
                <div className="container has-text-centered my-6">
                    <h2 className="title is-2 has-text-info">Congratulations! You completed the subunit!</h2>

                    <button onClick={completeLesson} className="button is-success is-outlined">Claim EXP</button>
                    <div className="my-6">
                    <p className="has-text-info content is-medium">Questions: {rightAnswers.questions}</p>
                    <p className="has-text-success content is-medium">Correct Answers: {rightAnswers.correct}</p>
                    </div>

                </div>
            }

        </>
    )
    //rotation three: component name: UserInputModule
    //show a flash card or something similar, allow user text input
    //check input, highlight in red on answer where wrong, green on correct one where wrong

}

export default Lesson