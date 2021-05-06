
const Unit = ({unit}) => {
    return (
        <ul>
            <li>{unit.unitName}</li>
            <li>{unit.unitNumber}</li>
            <li>{unit.id}</li>
            <li>{unit.subUnits}</li>
        </ul>
    )
}

export default Unit