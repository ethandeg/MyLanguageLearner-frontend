
const LanguageIcon = ({ language, children }) => {

    return (
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
                {children && 
                <div style={{position:"absolute", right: "0%", bottom: "0%"}}>
                    {children}
                </div>
                }
                </div>
            </div>
    )
}

export default LanguageIcon