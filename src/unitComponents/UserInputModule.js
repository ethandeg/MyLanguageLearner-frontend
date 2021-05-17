import GuessForm from "../authForms/GuessForm"
import { useState } from "react"
import CloseAnswer from "./CloseAnswer"
import Modal from "../utilityComponents/Modal"
const UserInputModule = ({ card, nextCard, gotItRight, gotItWrong }) => {
    console.log(card)
    const [answer, setAnswer] = useState(null)
    //make answer an object {result: "wrong", guess: "something", answer: "nothing"}
    const [closeIndexes, setCloseIndexes] = useState(false)




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
                <CloseAnswer key ="body" closeIndexes={closeIndexes} realAnswer={answer}/>
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
                <div key="body">
                    <p className="has-text-success">Answer: {answer.answer}</p>
                    <p className="has-text-danger">Guess: {answer.guess}</p>
                </div>
                <button key="footer" onClick ={() => wrongAnswer()} className="button is-info">Next</button>
            </Modal>
            </>
            }
            <div className="box has-text-centered p-6" style={{ marginTop: "15%" }}>
                <h1>{card.segment}</h1>
            </div>
            <GuessForm submit={checkAnswer} />
        </>


    )
}


export default UserInputModule