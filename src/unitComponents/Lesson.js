const Lesson = ({subUnit}) => {
    console.log(subUnit)
    return (
        <ul>
            {subUnit && subUnit.material.map((mat, i) => (
                mat.map((seg,j) => (
                    <div key={`${i}-${j}`}>
                        <li>{seg.segment}</li>
                        <li>{seg.translation}</li>
                    </div>
                ))
                // <div key={i}>
                // <li>{mat[i].segment}</li>
                // <li>{mat[i].translation}</li>
                // </div>
            ))}
        </ul>
    )
}

export default Lesson