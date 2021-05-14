import GuessForm from "../authForms/GuessForm"
import { useState } from "react"
import CloseAnswer from "./CloseAnswer"
const UserInputModule = ({ card, nextCard }) => {
    console.log(card)
    const [answer, setAnswer] = useState(null)
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
            setAnswer("Correct")
            nextCard()
        }
        else if (indexes.length <= 2) {
            setCloseIndexes({ indexes, guess, answer })
            //make message component, pass in a message, and classname
            //make modal component => pass in message and classname
            setAnswer("Close")
        } else {
            setAnswer(`Wrong - guess : ${guess}, - answer: ${answer}`)
        }
    }

    const correctAnswer = () => {
        setAnswer("correct")
        nextCard()
        setCloseIndexes(false)
    }
    return (
        <>
            {answer &&
                <div className="notification is-info is-light">
                    <button className="delete"></button>
                    {answer}
                </div>
            }
            {closeIndexes && <CloseAnswer setCloseIndexes={setCloseIndexes} closeIndexes={closeIndexes} correctAnswer={correctAnswer} />}
            <div className="box has-text-centered p-6" style={{ marginTop: "15%" }}>
                <h1>{card.segment}</h1>
            </div>
            <GuessForm submit={checkAnswer} />
        </>


    )
}


export default UserInputModule