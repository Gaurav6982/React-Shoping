import { ADD_TO_CART, REMOVE_FROM_CART } from "../types"

export const addToCart=(product)=>(dispatch,getState)=>{
    const cartItems=getState().cart.cartItems.slice();
    let alreadyAdded=false;
    cartItems.forEach(element => {
        if(element.id===product.id)
        {
            alreadyAdded=true;
            element.count++;
        }
    });
    if(!alreadyAdded)
        cartItems.push({...product,count:1});
    dispatch({
        type:ADD_TO_CART,
        payload:cartItems
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
}

export const removeFromCart=(product)=>(dispatch,getState)=>{
    const cartItems=getState().cart.cartItems.slice().filter(x=>x.id!==product.id);
    dispatch({
        type:REMOVE_FROM_CART,
        payload:cartItems,
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
}