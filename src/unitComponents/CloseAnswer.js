const CloseAnswer = ({ closeIndexes, realAnswer}) => {
    console.log(closeIndexes)

    return (
        <>
            <p> Correct Answer:
                {realAnswer.answer.split('').map((letter, i) => (
                closeIndexes.includes(i)

                    ?
                    <span className="has-text-success" key={`answer ${i}`}>{letter}</span>
                    :
                    <span className="has-text-black" key={`answer ${i}`}>{letter}</span>
            ))}
            </p>
            <p> Your Guess:
                {realAnswer.guess.split('').map((letter, i) => (
                closeIndexes.includes(i)

                    ?
                    <span className="has-text-danger" key={`guess ${i}`}>{letter}</span>
                    :
                    <span className="has-text-black" key={`guess ${i}`}>{letter}</span>
            ))}
            </p>
            {/* change this button to handle a not correct answer */}
        </>
    )

}
export default CloseAnswer