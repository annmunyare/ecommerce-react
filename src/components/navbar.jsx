import React, { Component } from "react";
import Cart from "./cart";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="row text-center">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            My-CART
            <button className="btn btn-warning btn-sm">
              Cart <span className="badge badge-pill badge-secondary" />
              {this.props.toCart}
            </button>
          </a>
        </nav>
        <table>
          {/* <tbody>
            {this.props.cart.map(cartProducts => (
              <Cart key={cartProducts.id} cartProducts={cartProducts} />
            ))}
          </tbody> */}
        </table>
      </div>
    );
  }
}

export default NavBar;
