import React, { Component } from "react";
import Cart from "./cart";

class Carts extends Component {
  render() {
    if (this.props.totalPrice <= 0) {
      return (
        <div>
          <div className="col-sm-12 col-md-6">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    <button
                      className="btn btn-lg btn-block btn-primary
                text-uppercase"
                    >
                      Add Product to cart to appear Here!!!
                    </button>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="col-sm-12 col-md-6">
            <table className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th> </th>
                  <th>Product</th>
                  <th>Available</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-right">Price</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {this.props.cartItems.map(cartProducts => (
                  <Cart
                    key={cartProducts.id}
                    cartProducts={cartProducts}
                    onDelete={this.props.onDelete}
                  />
                ))}
                <tr>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td className="text-right">
                    <strong>{this.props.totalPrice}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col md-2">
            <div className="row">
              <div className="col-sm-12 col-md-6" />
              <div className="col-sm-12 col-md-6 text-right">
                <button
                  onClick={() => this.props.placeCarts(this.props.cartItems)}
                  className="btn btn-lg btn-block btn-success
                text-uppercase"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Carts;
