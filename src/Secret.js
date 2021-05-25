import useTimedMessage from "./hooks/useTimedMessage"
import Message from "./utilityComponents/Message"
const Secret = () => {
       const [myMsgFlag, setMyMsgFlag] = useTimedMessage();

       function somethingDidntWork() {
         setMyMsgFlag(true);
       }
    


    return (
    <>
    {myMsgFlag &&
    <Message bodyClass="is-primary has-text-centered" content="and this is a message so you know, how does it work"/>
    }
    <button onClick={somethingDidntWork}>click me</button>
    </>
    )
}
export default Secret