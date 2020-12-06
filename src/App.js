//feature 1
import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      sort: "",
      size: "",
    };
  }
  filterProducts=(event)=>{
    const size=event.target.value;
    if(size==="")
    {
      this.setState({
        size:"",
        products:data.products,
      });    
    }
    else
    {
      this.setState((state)=>({
        sort:"",
        size:size,
        products:data.products.filter(product=>
          product.availableSizes.indexOf(size)>=0
        )
      }));
    }
  }
  sortProducts=(event)=>{
    const sort=event.target.value;
    this.setState({
      sort:sort,
      products:this.state.products.slice().sort((a,b)=>
        sort==="lowest"?
        a.price>b.price?1:-1:
        sort==="highest"?
        a.price<b.price?1:-1:
        a._id<b._id?1:-1
      )
    })
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React shoping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All rights Reserved.</footer>
      </div>
    );
  }
}

export default App;
