import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
// import '../App.css'
import Loading from "../components/Loading";
const SingleProductPage = () => {
    const { cocktailList, loading } = useGlobalContext()
    const { productID } = useParams();
if (loading) {
    return <Loading/>
}
    return (
        <>
            {
                cocktailList.filter(product => {
                    return product.idDrink === productID;
                }).map(item => {
                    return (
                        <section className="page"  key={item.idDrink}>
                            <div className="singleProduct">
                                <header>
                                    <Link className="btn" to='/'>Back Home</Link>
                                    <h3>{item.strDrink}</h3>
                                </header>
                                <div className="drink">
                                    <img src={item.strDrinkThumb} alt="" className="img" />
                                    <div className="drink-info">
                                        <p><span className="drink-data">name :</span>{item.strDrink}</p>
                                        <p><span className="drink-data">category :</span>{item.strCategory}</p>
                                        <p><span className="drink-data">info :</span>{item.strAlcoholic}</p>
                                        <p><span className="drink-data">glass :</span>{item.strGlass}</p>
                                        <p><span className="drink-data">ingredients :</span>
                                        <span className="ing">{item.strIngredient1}, </span>
                                        <span className="ing">{item.strIngredient2}, </span>
                                        <span className="ing">{item.strIngredient3}</span>
                                        </p>
                                        <p><span className="drink-data">instructions :</span>{item.strInstructions}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })
            }</>
    )
        
}

export default SingleProductPage;