import { FETCH_PRODUCTS } from "../types";

export const fetchProducts=()=>async(dispatch)=>{
    const res=await fetch("http://127.0.0.1:8000/api/products");
    const data=res.json();

    dispatch({
        type:FETCH_PRODUCTS,
        payload:data,
    });
}