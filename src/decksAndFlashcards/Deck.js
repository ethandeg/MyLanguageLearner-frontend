import { Link } from "react-router-dom"

const Deck = ({ deck }) => {
    return (
        <div className="column is-one-quarter">
            <div className="card has-text-centered">
                <p className="card-content title is-6"><Link style={{ display: "block", width: "100%", height: "100%" }} to={`/decks/${deck.id}`}>{deck.name}</Link></p>
            </div>
        </div>
    )
}

export default Deck