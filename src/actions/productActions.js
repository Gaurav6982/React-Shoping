import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_SIZE, SORT_PRODUCTS_BY_PRICE } from "../types";

export const fetchProducts = ()=>async(dispatch)=>{
    const res=await fetch("http://127.0.0.1:8000/api/products");
    const data=await res.json();
    dispatch({
        type:FETCH_PRODUCTS,
        payload:data,
    });
}

export const filterProducts=(products,size)=>(dispatch)=>{
    dispatch({
        type:ORDER_PRODUCTS_BY_SIZE,
        payload:{
            size:size,
            items:size===""?products:products.filter(x=>JSON.parse(x.availableSizes).indexOf(size)>=0),
        }
    })
}

export const sortProducts=(filteredProducts,sort)=>(dispatch)=>{
    // let final;
    var sortedProducts=filteredProducts.slice();
    if(sort==="latest")
    {
        sortedProducts.sort((a,b)=>(a.id>b.id?1:-1));
    }
    else
    {
        if(sort==="lowest")
        {
            sortedProducts.sort((a,b)=>(a.price>b.price?1:-1));
        }
        else
        {
            sortedProducts.sort((a,b)=>a.price>b.price?-1:1);
        }
    }
    dispatch({
        type:SORT_PRODUCTS_BY_PRICE,
        payload:{
            sort:sort,
            items:sortedProducts
        }
    })
}