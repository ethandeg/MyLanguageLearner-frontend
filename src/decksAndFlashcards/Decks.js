import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { createNewDeck } from "../actions/actions"
import OneInputForm from "../authForms/OneInputForm"
import Deck from "./Deck"
import Message from "../utilityComponents/Message"
const Decks = ({timer, message}) => {
    const decks = useSelector(store => store.decks)
    const user = useSelector(store => store.userInfo)
    const dispatch = useDispatch()
    const handleSubmit = (data) => {
        try{
            dispatch(createNewDeck(user.username, data.name))
            timer(true)
            message(<Message bodyClass="is-primary has-text-centered" content={`${data.name} succesfully created!`}/>)
        } catch(e){
            console.error(e)
        }
        
    }
    return (
        <div className="container mb-6">
            <h1 className="title is-2 has-text-centered has-text-primary mt-5">Your Decks</h1>
            {user.username &&
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-one-third">
                        <OneInputForm title="Add a new deck" name="name" submit={handleSubmit}/>
                        
                    </div>
                    <div className="column"></div>
                </div>

            }
            {/* break off into a seperate component, have flashcards use it too! */}
            <div className="columns mt-6 is-multiline is-mobile">
                {decks.length ? decks.map(deck => (
                    <div className="column is-full-mobile is-half-tablet is-one-third-desktop" key={deck.id}>
                    <Deck deck={deck} timer={timer} message={message}/>
                    </div>
                )) : null}
            </div>




        </div>
    )
}

export default Decks