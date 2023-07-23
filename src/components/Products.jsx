import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import '../App.css';
import { useGlobalContext } from "../context";
import Loading from "./Loading";
const Products=()=>{
    const { cocktailList, loading } = useGlobalContext()

if(loading){
    return <Loading/>
}

if(cocktailList<1){
    return(
    <h4 style={{textAlign: 'center'}}>No matching cocktails found...</h4>
    )
}


    return(
        <div className="products">
        {
            cocktailList.map((product)=>{
          return <SingleProduct key={product.idDrink}{...product}/>
            })
        }
        </div>
    )
}

export default Products;