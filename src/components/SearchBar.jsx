import '../App.css'
import { useEffect, useRef } from 'react'
import { useGlobalContext } from "../context";
const SearchBar=()=>{
    const { setsearchValue } = useGlobalContext()
const inputValue = useRef(null)


const HandleChange=()=>{
   setsearchValue(inputValue.current.value)
}

function handleSubmit(e) {
    e.preventDefault()
  }
  useEffect(()=>{

    inputValue.current.focus();
    },[])
    

return(

    <div>
        <form action="/" className="form" onSubmit={handleSubmit}>
        <input type="search" name="search" className='input'
        ref={inputValue} onChange={HandleChange}/>
        <button type="submit" className='btn'>Search</button>

        </form>
    </div>

)


}

export default SearchBar;