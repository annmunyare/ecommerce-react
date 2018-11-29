import React, { Component } from "react";
import Products from "./components/products";
import NavBar from "./components/navbar";
import Carts from "./components/carts";
import "./App.css";

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    theProducts: [],
    cartCount: 0,
    cartItems: [],
    placedCarts: [],
    totalPrice: 0
  };

  componentDidMount() {
    fetch("https://ecommerce-anne.azurewebsites.net/productJson")
      .then(response => {
        return response.json();
      })
      .then(
        data => {
          this.setState({
            isLoaded: true,
            theProducts: data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleAddToCart = prod => {
    console.log(prod);
    let { cartCount, totalPrice, cartItems } = this.state;
    let product = {
      ...prod
    };
    let productIds = 0;
    cartCount++;
    if (cartItems.length > 0) {
      productIds = cartItems.reduce((total, eachProduct) => {
        if (eachProduct.productId === product.productId) {
          total = product.productId;
        }
        return total;
      }, 0);
      if (productIds === product.productId) {
        cartItems.map(cart => {
          if (product.productId === cart.productId) {
            cart.quantity++;
          }
        });
      } else {
        product.quantity = 1;
        product.id = product.productId;
        cartItems.push(product);
      }
      productIds = 0;
    } else {
      product.quantity = 1;
      product.id = product.productId;
      cartItems.push(product);
    }

    totalPrice = 0;
    for (let index = 0; index < cartItems.length; index++) {
      totalPrice += cartItems[index].productPrice * cartItems[index].quantity;
    }

    this.setState({
      cartCount,
      cartItems,
      totalPrice
    });
  };

  handleDelete = cartId => {
    let { totalPrice, cartCount } = this.state;
    const cartItems = this.state.cartItems.filter(cart => cart.id !== cartId);
    totalPrice = 0;
    cartCount = 0;
    for (let index = 0; index < cartItems.length; index++) {
      totalPrice += cartItems[index].productPrice * cartItems[index].quantity;
      cartCount += cartItems[index].quantity;
    }
    this.setState({
      cartItems,
      totalPrice,
      cartCount
    });
  };

  handlePlaceCart = cartsPlaced => {
    let { placedCarts, cartItems, cartCount, totalPrice } = this.state;
    placedCarts = cartsPlaced;
    totalPrice = 0;
    cartItems = [];
    cartCount = 0;

    this.setState({
      placedCarts,
      cartItems,
      cartCount,
      totalPrice
    });
  };

  render() {
    const { error, isLoaded, theProducts, cartItems, cartCount } = this.state;
    if (error) {
      return (
        <div>
          <button className="btn btn-danger btn-bg m-4">
            Error: {error.message}
          </button>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Loading.....</h5>
            <button className="btn btn-warning m-4">
              Waiting while data is updated
            </button>
          </div>
        </div>
      );
    } else if (theProducts.length > 0) {
      return (
        <div className="container">
          <NavBar toCart={cartCount} cart={cartItems} />
          <main className="row col-md-12">
            <div className="col-md-7">
              <Products
                addToCart={this.handleAddToCart}
                products={theProducts}
              />
            </div>
            <div className="col-md-5">
              <Carts
                cartItems={cartItems}
                placeCarts={this.handlePlaceCart}
                totalPrice={this.state.totalPrice}
                onDelete={this.handleDelete}
              />
            </div>
          </main>
        </div>
      );
    }
  }
}

export default App;
