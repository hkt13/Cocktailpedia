import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()


const AppProvider=({ children })=>{
const [loading, setloading] = useState(true)
const [cocktailList, setcocktailList] = useState([])
const [searchValue, setsearchValue] = useState('')
const [alert, setalert] = useState(false)

const fetchData=useCallback(async ()=>{
    setloading(true)
    try {
         const response = await fetch(`${url}${searchValue}`);
       const data = await response.json();
       if(data){
       setcocktailList(data.drinks);
       }
       else{
        setcocktailList([])
       }

       setloading(false)
    } catch (error) {
        console.log('error')
    }
   
   },[searchValue])

useEffect( ()=>{
     fetchData();
},[searchValue, fetchData])

return(

    <AppContext.Provider value={{ cocktailList, setsearchValue, loading, setloading, alert, setalert }}>
{children}

    </AppContext.Provider>
)

}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }