//feature 1
import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store"
import {Provider} from "react-redux"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      sort: "",
      size: "",
    };
  }
  checkOrder = (order) => {
    alert("Order Created by Name : " + order.name);
  };
  removeFromCart = (product) => {
    this.setState({
      cartItems: this.state.cartItems.filter(
        (item) => item.id !== product.id
      ),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(
        this.state.cartItems.filter((item) => item.id !== product.id)
      )
    );
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) cartItems.push({ ...product, count: 1 });
    this.setState({
      cartItems: cartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  render() {
    return (
      <Provider store={store}>
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
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                checkOrder={this.checkOrder}
              />
            </div>
          </div>
        </main>
        <footer>All rights Reserved.</footer>
      </div>
      </Provider>
    );
  }
}

export default App;
