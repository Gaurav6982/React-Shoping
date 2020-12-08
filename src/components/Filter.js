import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div>
                    {this.props.count} Products
                </div>
                <div>
                    Size :{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
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
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>latest</option>
                        <option value="lowest">lowest</option>
                        <option value="highest">highest</option>
                    </select>
                </div>
            </div>
        )
    }
}
