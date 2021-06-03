const Modal = ({children}) => {
    //have 3 optional children, maybe set some factor to know if it is head, body, or footer
    const title = children.find(child => child.key === "title")
    const body = children.find(child => child.key === "body")
    const footer = children.find(child => child.key === "footer")
return (
<div className="modal is-active">
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">{title}</p>
    </header>
    <section className="modal-card-body">
      {body}
    </section>
    {footer && 
       <footer className="modal-card-foot">
       {footer}
     </footer> 
    }

  </div>
</div>
)
}

export default Modal