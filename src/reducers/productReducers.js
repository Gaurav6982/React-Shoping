import {
  FETCH_PRODUCTS,
  ORDER_PRODUCTS_BY_SIZE,
  SORT_PRODUCTS_BY_PRICE,
} from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    case ORDER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    case SORT_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };
    default:
      return state;
  }
};
