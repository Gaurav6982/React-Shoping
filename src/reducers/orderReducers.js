import {  CLEAR_ORDER, CREATE_ORDER } from "../types";

export const orderReducer=(state={},action)=>{
    switch(action.type)
    {
        case CREATE_ORDER: return {order:action.payload}
        case CLEAR_ORDER:return {order:null};
        // case CLEAR_CART:return state; 
        default:return state;
    }
}
