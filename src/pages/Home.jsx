import '../App.css'
import SearchBar from '../components/SearchBar';
import Products from '../components/Products';
import { useGlobalContext } from '../context';
import Alert from '../components/Alert';
const Home=()=>{
  const {alert} = useGlobalContext();

    return(
        <section className="page">
         {alert && <Alert/>}
         {/* <Alert/> */}
          <SearchBar/>
          <Products/>
        </section>
    )
}

export default Home;