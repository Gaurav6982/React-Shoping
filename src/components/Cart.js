import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from 'react-reveal/Fade'
export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address: "",
      showForm: false,
    };
  }
  handleInput = (e) => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  checkOrder = (e) => {
    e.preventDefault();

    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.checkOrder(order);
  };
  render() {
    return (
      <div>
        {this.props.cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is Empty.</div>
        ) : (
          <div className="cart cart-header">
            You have {this.props.cartItems.length} in the cart.{" "}
          </div>
        )}
        <div>
          <div className="cart">
            <Fade left cascade>
            <ul className="cart-items">
              {this.props.cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      {formatCurrency(item.price)} x {item.count}{" "}
                      <button
                        className="button"
                        onClick={() => this.props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </Fade>
          </div>
          {this.props.cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      this.props.cartItems.reduce(
                        (a, c) => a + c.price * c.count,
                        0
                      )
                    )}
                  </div>
                  <button
                    onClick={() => this.setState({ showForm: true })}
                    className="button primary"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              {this.state.showForm && (
                <Fade right cascade>
                <div className="cart">
                  <form onSubmit={this.checkOrder}>
                    <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <label>Address</label>
                        <input
                          type="text"
                          name="address"
                          required
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <button className="button primary">Checkout</button>
                      </li>
                    </ul>
                  </form>
                </div>
                </Fade>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
