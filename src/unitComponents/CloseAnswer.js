const CloseAnswer = ({ setCloseIndexes, closeIndexes, correctAnswer }) => {
    console.log(closeIndexes)
    const { indexes, guess, answer } = closeIndexes

    return (
        <>
            <p> Correct Answer:
                {answer.split('').map((letter, i) => (
                indexes.includes(i)

                    ?
                    <span className="has-text-success" key={`answer ${i}`}>{letter}</span>
                    :
                    <span className="has-text-black" key={`answer ${i}`}>{letter}</span>
            ))}
            </p>
            <p> Your Guess:
                {guess.split('').map((letter, i) => (
                indexes.includes(i)

                    ?
                    <span className="has-text-danger" key={`guess ${i}`}>{letter}</span>
                    :
                    <span className="has-text-black" key={`guess ${i}`}>{letter}</span>
            ))}
            </p>
            {/* change this button to handle a not correct answer */}
            <button onClick={() => correctAnswer()} className="button is-warning">Not Quite Unfortunately</button>
            <button onClick={() => correctAnswer()} className="button is-success">It is Correct</button>
        </>
    )

}
export default CloseAnswer