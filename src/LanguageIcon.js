const LanguageIcon = ({ language }) => {
    return (
        <div className="column is-one-third">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-5by3">
                        <img src={language.flag} alt={language.name} />
                    </figure>
                </div>
                <div className="card-header">
                    <p className="card-header-title is-centered">
                        {language.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LanguageIcon