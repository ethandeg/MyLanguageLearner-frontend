const Lesson = ({subUnit}) => {
    console.log(subUnit)
    //have first lesson be simply going through all of the flash cards
    return (
        <ul>

        {subUnit && subUnit.material.map((mat, i) => (
            <li key={i}>{mat.segment} - {mat.translation.join(', ')}</li>
        ))}
        </ul>
    )
}

export default Lesson