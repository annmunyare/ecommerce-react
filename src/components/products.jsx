import React, { Component } from "react";
import Product from "./product";
class Products extends Component {
  constructor() {
    super();
    //Initialize the state in the constructor
    this.state = {
      products: []
    };
  }
  /*componentDidMount() is a lifecycle method
       * that gets called after the component is rendered
       */
  // componentDidMount() {
  //   /* fetch API in action */
  //   fetch("https://ecommerce-anne.azurewebsites.net/productJson")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(products => {
  //       //Fetched product is stored in the state
  //       this.setState({ products });
  //     });
  // }

  imageURL() {
    return "https://ecommerce-anne.azurewebsites.net/images/";
  }

  render() {
    return (
      <div className="row">
        {this.props.products.map(product => (
          <Product
            key={product.id}
            sellerId={product.user_id}
            addToCart={this.props.addToCart}
            productId={product.id}
            productImage={this.imageURL() + product.image}
            productName={product.product_name}
            productPrice={product.product_price}
            productName={product.product_status}
          />
        ))}
      </div>
    );
  }
}

export default Products;
