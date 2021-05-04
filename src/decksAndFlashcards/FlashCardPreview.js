const FlashCardPreview = ({card}) => {
    return (
        <ul>
            <li>{card.id}</li>
            <li>{card.front_side}</li>
            <li>{card.back_side}</li>
        </ul>
    )
}

export default FlashCardPreview