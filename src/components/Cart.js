import React, { Component } from "react";
import formatCurrency from "../util";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartAcions";
import {createOrder,clearOrder} from "../actions/orderActions";
class Cart extends Component {
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
    this.setState({ [e.target.name]: e.target.value });
  };
  checkOrder = (e) => {
    e.preventDefault();

    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
      total:this.props.cartItems.reduce((a,c)=>a+c.price*c.count,0)
    };
    this.props.createOrder(order);
  };
  closeModal=()=>{
    this.setState({name:"",email:"",address:"",showForm:false});
    this.props.clearOrder();
  }
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
        {this.props.order && (
          <Modal isOpen={true} ariaHideApp={false}>
            <Zoom>
            <div className="close-btn">
              <button className="close-modal" onClick={this.closeModal}>x</button>
            </div>
              <div className="order-details">
                <h3 className="success-message">YOUR ORDER HAS BEEN PLACED.</h3>
                <h2 >order {this.props.order.id}</h2>
                <ul>
                  <li key={"name"+this.props.order.id}>
                    <div>Name:</div>
                    <div>{this.props.order.name}</div>
                  </li>
                  <li key={"email"+this.props.order.id}>
                    <div>Email:</div>
                    <div>{this.props.order.email}</div>
                  </li>
                  <li key={"address"+this.props.order.id}>
                    <div>Address:</div>
                    <div>{this.props.order.address}</div>
                  </li>
                  <li key={"total"+this.props.order.id}>
                    <div>Total:</div>
                    <div>{formatCurrency(this.props.order.total)}</div>
                  </li>
                  <li key={"items"+this.props.order.id}>
                    <div>Cart Items:</div>
                    <div>
                      {JSON.parse(this.props.order.cartItems).map(x=>(
                        <div>
                          {x.count}{" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
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
                        <li key="email">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            required
                            onChange={this.handleInput}
                          />
                        </li>
                        <li key="name">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            required
                            onChange={this.handleInput}
                          />
                        </li>
                        <li key="address">
                          <label>Address</label>
                          <input
                            type="text"
                            name="address"
                            required
                            onChange={this.handleInput}
                          />
                        </li>
                        <li key="checkout">
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

export default connect(
  (state) => ({
    order:state.order.order,
    cartItems: state.cart.cartItems,
  }),
  {
    createOrder,
    clearOrder,
    removeFromCart,
  }
)(Cart);
