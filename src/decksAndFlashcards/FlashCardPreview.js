const FlashCardPreview = ({card}) => {
    return (
        <div className="column">
        <div className="card py-6">
            <div className="card-content has-text-centered">
                {card.frontSide}
            </div>
        </div>
        </div>
    )
}

export default FlashCardPreview