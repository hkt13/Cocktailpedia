import { Link } from "react-router-dom";
import '../App.css'
const SingleProduct=(product)=>{
    
return(
    <article className="product" key={product.idDrink}>

        <div className="img-container">
            <img src={product.strDrinkThumb} alt="" className="img" />
        </div>
        <div className="footer">
            <h4>{product.strDrink}</h4>
            <h5>{product.strGlass}</h5>
            <p>{product.strAlcoholic}</p>
            <Link to={`/cocktail/${product.idDrink}`} className='btn btn-primary btn-details'>
          details
        </Link>
        </div>
    </article>
)

}

export default SingleProduct;