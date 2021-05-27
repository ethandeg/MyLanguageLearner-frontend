import GuessForm from "../authForms/GuessForm"
import { useState } from "react"
import CloseAnswer from "./CloseAnswer"
import Modal from "../utilityComponents/Modal"
import { useSelector, useDispatch } from "react-redux"
import AddToDeckForm from "../authForms/AddToDeckForm"
import {addFlashCardNoDispatch} from "../actions/actions"
const UserInputModule = ({ card, nextCard, gotItRight, gotItWrong }) => {
    console.log(card)
    const dispatch = useDispatch()
    const [answer, setAnswer] = useState(null)
    const [showDecks, setShowDecks] = useState(false)
    //make answer an object {result: "wrong", guess: "something", answer: "nothing"}
    const [closeIndexes, setCloseIndexes] = useState(false)
    //create logic to turn wrong answer into a flashcard for further studying
    //populate with user decks to pick which one
    const decks = useSelector(state => state.decks)




    const checkWrongIndexes = (str1, str2) => {
        if (str1.toLowerCase() === str2.toLowerCase()) return []
        const indexes = []
        const loopStr = str1.length >= str2.length ? str1 : str2
        for (let i = 0; i < loopStr.length; i++) {
            if (str1[i] && str2[i]) {
                if (str1[i].toLowerCase() !== str2[i].toLowerCase()) {
                    indexes.push(i)
                }
            } else {
                indexes.push(i)
            }

        }
        return indexes
    }

    const checkAnswer = (guess) => {
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        const answer = card.translation[0].replace(regex, '')
        guess = guess.replace(regex, '')
        const indexes = checkWrongIndexes(guess, answer)
        if (!indexes.length) {
            correctAnswer(guess, answer)
            nextCard()
        }
        else if (indexes.length <= 2) {
            setCloseIndexes(indexes)
            //make message component, pass in a message, and classname
            //make modal component => pass in message and classname
            setAnswer({result:"Close", guess, answer})
        } else {
            setAnswer({result: "Wrong", guess, answer})
            gotItWrong()
        }
    }

    const correctAnswer = (guess=null, answer=null) => {
        setAnswer({result:"Correct", guess, answer})
        gotItRight()
        nextCard()
        setCloseIndexes(false)
    }

    const wrongAnswer = (guess=null, answer=null) => {
        setAnswer(false)
        nextCard()
        setCloseIndexes(false)
    }

    const handleWrongClick =() => {
        wrongAnswer()
        gotItWrong()
    }

    const changeDeckView = () => {
        if(showDecks){
            setShowDecks(false)
        } else {
            setShowDecks(true)
        }
    }

    const sendToDeck = async(deckId) => {
        try {
            await addFlashCardNoDispatch(deckId,card.translation[0],card.segment)
            wrongAnswer()
        } catch(e){
            console.log(e)
        }
        
    }


    return (
        <>
            {answer &&
                <div className="notification is-info is-light">
                    <button className="delete"></button>
                    {answer.result}
                </div>
            }
            {closeIndexes && <>
            <Modal>
                <span key="title">So Close!</span>   
                {showDecks
                
                ?
                <div key="body">
                <AddToDeckForm decks={decks} submit={sendToDeck} cancel={changeDeckView}/>

            </div>
                :
                <CloseAnswer key ="body" closeIndexes={closeIndexes} realAnswer={answer}/>
                }           
               
                
                <div key="footer">
                    <button onClick={() => handleWrongClick()} className="button is-warning">Not Quite Unfortunately</button>
                    <button onClick={() => correctAnswer()} className="button is-success">It is Correct</button>
                </div>
                
            </Modal>
            
            
            </>
            }

            {answer && answer.result === "Wrong" && 
            <>
            <Modal>
                <span key="title">Incorrect!</span>
                {showDecks
                
                ?
                <div key="body">
                <AddToDeckForm decks={decks} submit={sendToDeck} cancel={changeDeckView}/>

            </div>
                :
                <div key="body">
                    <p className="has-text-success">Answer: {answer.answer}</p>
                    <p className="has-text-danger">Guess: {answer.guess}</p>
                </div>                
                }
                {!showDecks &&
                
                <div key="footer">
                <button className="button is-info is-outlined" onClick={changeDeckView}>Create Flashcard</button>
                <button onClick ={() => wrongAnswer()} className="button is-info">Next</button>
                </div>               
                }


                
            </Modal>
            </>
            }
            <div className="box has-text-centered" style={{ marginTop: "15%", paddingTop: "15%", paddingBottom: "15%" }}>
                <h1 className="title is-2 has-text-primary">{card.segment}</h1>
            </div>
            <GuessForm submit={checkAnswer} />
        </>


    )
}


export default UserInputModule