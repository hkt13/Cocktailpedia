import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";
const Alert=()=>{
    const [showTransition, setShowTransition] = useState(false);
    const {setalert} = useGlobalContext();

    function HandleClick(){
setShowTransition(false)
setTimeout(() => {
    setalert(false);
  }, 500);
    }

    useEffect(() => {
        const delay = 800; // 1000ms delay (1 second)
        const timer = setTimeout(() => {
          setShowTransition(true);
        }, delay);
    
        // Clearing the timer to avoid memory leaks
        return () => clearTimeout(timer);
      }, []);
    return (
        <>
        <div className={showTransition ? 'alert show': 'alert'}>
     <button className="close" onClick={HandleClick}><i className="fa-solid fa-xmark"></i></button>  
            <p><span>Success! </span>
            you are subscribed.
            </p>
        </div>
        </>
    )
}
export default Alert;