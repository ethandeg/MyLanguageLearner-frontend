import useTimedMessage from "./hooks/useTimedMessage"
const Secret = () => {
       const [myMsgFlag, setMyMsgFlag] = useTimedMessage();

       function somethingDidntWork() {
         setMyMsgFlag(true);
       }
    


    return (
    <>
    {myMsgFlag &&
    <p>Here is your alert message</p>
    }
    <button onClick={somethingDidntWork}>click me</button>
    </>
    )
}
export default Secret