import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";
const Alert=()=>{
 
// console.log(targetdiv)
    const [showTransition, setShowTransition] = useState(false);
    const {setalert} = useGlobalContext();

    function HandleClick(){
setShowTransition(false)
setTimeout(() => {
    setalert(false);
  }, 500);
    }


    useEffect(() => {
 
      const targetdiv = document.querySelector('.alert')
      function handleClickOutside(event) {
        if (targetdiv && !targetdiv.contains(event.target)) {
          HandleClick();
        }
      }
  
      document.addEventListener('click', handleClickOutside);
      
        const delay = 800; // 1000ms delay (1 second)
        const timer = setTimeout(() => {
          setShowTransition(true);
        }, delay);
    
        // Clearing the timer to avoid memory leaks
        return () => {
          clearTimeout(timer);
          document.removeEventListener('click', handleClickOutside);
        };
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