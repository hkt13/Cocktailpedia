import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../context";
const Newsletter=()=>{
const [submit, setsubmit] = useState(false)
const { setalert } = useGlobalContext()
    
    function HandleSubmit(e) {
        e.preventDefault();
        setsubmit(true);
        setalert(true)
    }

    if(submit){
       return <Navigate to="/MixMaster/"/>
    }

    return(

        <section className="page">
            <form action="/Newsletter" className="Newsletter-form" onSubmit={HandleSubmit}>
                <h4>Our Newsletter</h4>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">name</label>
                    <input type="text" className="form-input" id="name" required />
                </div>
                <div className="form-row">
                <label htmlFor="lastName" className="form-label">lastName</label>
                    <input type="text" className="form-input" id="lastName" required />
                </div>
                <div className="form-row">
                <label htmlFor="email" className="form-label">email</label>
                    <input type="text" className="form-input" id="email" required />
                </div>
                <button  type="submit" className="submit-btn btn" >Submit</button>
            </form>
        </section>
    )
}

export default Newsletter;