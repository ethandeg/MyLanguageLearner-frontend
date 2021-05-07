
const Unit = ({ unit }) => {
    return (
        <article className="panel is-primary">
            <p className="panel-heading">{unit.unitName} - {unit.unitNumber}</p>
            <div className="panel-block"></div>

            {unit.subUnits.map((sub, i) => (
                <>
                    <a className="panel-block is-active">
                        <span className="icon is-left">
                            <i className="fas fa-book" aria-hidden="true"></i>
                        </span>
                        Lesson {i} - Sub-Unit {sub}
                    </a>
                </>
            ))}

        </article>
    )
}

export default Unit