import {useSelector} from "react-redux"
const HomeUser = () => {
    const user = useSelector(state => state.userInfo)
    return (
        <>
        <section className="hero is-medium has-text-centered is-primary">
            <div className="hero-body">
                <h1 className="title has-text-secondary">Welcome {user.username}</h1>
            </div>
            
        </section>

        <section className="mt-6 hero is-small is-secondary has-text-centered">
            <div className="hero-body">
                <h2 className="title has-text-primary">Let's get back to learning!</h2>
            </div>
        </section>
        </>
    )
}

export default HomeUser