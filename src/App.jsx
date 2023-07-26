import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Newsletter from './pages/Newsletter'
import SingleProductPage from './pages/SingleProductPage'
import Error from './pages/Error'
function App() {
  useEffect(() => {
    // Log the current route path when the component mounts
    console.log('Current route path:', window.location.pathname);
  }, []);
  return (
    <>
     <Router>
     <Navbar/>

     <Routes>
      <Route path= '/MixMaster/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/cocktail/:productID' element={<SingleProductPage/>}/>
      <Route path='/Newsletter' element={<Newsletter/>}/>
      <Route path='*' element={<Error/>}/>
     </Routes>
     </Router>

    </>
  )
}

export default App
