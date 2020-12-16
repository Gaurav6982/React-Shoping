import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "../types"

export const createOrder=(order)=>(dispatch)=>{
    fetch("http://127.0.0.1:8000/api/order",{
        method:"POST",
        headers:{
            "Content-type":"applicaton/json",
        },
        body:JSON.stringify(order)
    }).then(res=>res.json())
    .then(data=>{
        dispatch({
            type:CREATE_ORDER,payload:data
        });
        localStorage.clear("cartItems");
        dispatch({type:CLEAR_CART});
    })
}

export const clearOrder=()=>(dispatch)=>{
    dispatch({type:CLEAR_ORDER})
}