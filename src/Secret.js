import useTimedMessage from "./hooks/useTimedMessage"
import Message from "./utilityComponents/Message"
import LoadingScreen from "./utilityComponents/LoadingScreen"
const Secret = ({timer, message}) => {
       const [myMsgFlag, setMyMsgFlag] = useTimedMessage();

       function somethingDidntWork() {
         timer(true)
         message(<Message bodyClass="is-primary has-text-centered" content="and this is a message so you know, how does it work"/>)
       }
    


    return (
    <>

    <LoadingScreen />
    </>
    )
}
export default Secret