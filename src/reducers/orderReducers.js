import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "../types";

export const orderReducer=(state={},action)=>{
    switch(action.type)
    {
        case CREATE_ORDER: return {item:action.payload}
        case CLEAR_ORDER:return {item:null};
        // case CLEAR_CART:return {}; 
        default:return state;
    }
}
