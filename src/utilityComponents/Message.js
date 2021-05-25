const Message = ({bodyClass, content}) => {
    return (
        <article className={`message ${bodyClass}`}>
            <div className="message-body">
                {content}
            </div>
        </article>
    )
}

export default Message