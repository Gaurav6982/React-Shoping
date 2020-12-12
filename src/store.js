import {createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import {productsReducer} from "./reducers/productReducers"
const initialState={};
export const store=createStore({
    combineReducers({
        products:productsReducer,
    })
});