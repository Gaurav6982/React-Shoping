import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import {connect} from "react-redux"
import {fetchProducts} from "../actions/productActions"
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  componentDidMount(){
    this.props.fetchProducts();
  }
  closeModal = () => {
    this.setState({ product: null });
  };
  openModal = (product) => {
    this.setState({ product });
  };
  render() {
    const available=this.state.product?JSON.parse(this.state.product.availableSizes):[];
    return (
      <div>
        {
          !this.props.products ? (<div>Loading...</div>):(
            
        <Fade bottom cascade>
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product.id}>
                <div className="product">
                  <a
                    href={"#" + product.id}
                    onClick={() => this.openModal(product)}
                  >
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
          )
        }

        {this.state.product && (
          <Modal isOpen={true}>
            <Zoom>
              <div className="close-btn">
                <button className="button close-modal" onClick={this.closeModal}>
                  x
                </button>
              </div>
              <div className="product-details">
                <img
                  src={this.state.product.image}
                  alt={this.state.product.title}
                />
                <div className="product-details-description">
                  <p>
                    <strong>{this.state.product.title}</strong>
                  </p>
                  <p>{this.state.product.description}</p>
                  <p>
                      Available Sizes :{" "}
                    {available.map((x) => (
                        <span>{" "}
                      <button className="button">{x}</button>
                      </span>
                    ))}
                  </p>
                  <p>
                      <div className="product-price">
                    <div>{formatCurrency(this.state.product.price)}</div>
                    <button
                      className="button primary"
                      onClick={() => {
                          this.props.addToCart(this.state.product);
                        this.closeModal();
                      }}
                    >
                      Add to Cart
                    </button>
                    </div>
                  </p>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

export default connect((state)=>({products:state.products.items}),{fetchProducts})(Products);
