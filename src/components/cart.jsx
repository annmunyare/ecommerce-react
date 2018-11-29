import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <tr>
        <td>
          <img
            style={{ width: 40 }}
            src={this.props.cartProducts.productImage}
          />
        </td>
        <td>{this.props.cartProducts.productName}</td>
        <td>In stock</td>
        <td>
          <label className="form-control">
            {this.props.cartProducts.quantity}
          </label>
        </td>
        <td className="text-right">
          Ksh.
          {this.props.cartProducts.productPrice *
            this.props.cartProducts.quantity}
        </td>
        <td className="text-right">
          <button
            onClick={() => this.props.onDelete(this.props.cartProducts.id)}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Cart;
