import React, { Component } from 'react'
import {connect} from "react-redux"
import {filterProducts,sortProducts} from "../actions/productActions"
class Filter extends Component {
    // componentDidMount(){
    //     this.props.filterProducts();
    //     this.props.sortProducts();
    // }
    render() {
        return (
            !this.props.filteredProducts?(<div>Loading...</div>):(
            <div className="filter">
                <div>
                    {this.props.filteredProducts.length} Products
                </div>
                <div>
                    Size :{" "}
                    <select value={this.props.size} onChange={(e)=>this.props.filterProducts(this.props.products,e.target.value)}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div>
                    Order :{" "}
                    <select value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredProducts,e.target.value)}>
                        <option value="latest">latest</option>
                        <option value="lowest">lowest</option>
                        <option value="highest">highest</option>
                    </select>
                </div>
            </div>
            )
        )
    }
}
export default connect((state=>({
    products:state.products.items,
    filteredProducts:state.products.filteredItems,
    sort:state.products.sort,
    size:state.products.size, 
})),{
    filterProducts,
    sortProducts
})(Filter);
