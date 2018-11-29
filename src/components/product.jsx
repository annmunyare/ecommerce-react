import React, { Component } from "react";
const divStyle = {
  margin: "10px",
  // border: "2px solid black",
  padding: "10px"
};

const divStyle2 = {
  height: "200px"
};
const divStyle3 = {
  width: "100%"
};

class Product extends Component {
  render() {
    return (
      <div className="product-images-wrapper img-thumbnail" style={divStyle}>
        <div className="main-media">
          <img
            src={this.props.productImage}
            alt={this.props.productName}
            style={divStyle2}
            className="card-img-top "
          />

          <div className="caption">
            <h3>{this.props.productName}</h3>
            <p>
              Price KES : <b>{this.props.productPrice}</b>
            </p>
            <p>
              Price Status : <b>{this.props.productStatus}</b>
            </p>

            <div className="card-footer bg-transparent border-success">
              <button
                onClick={() => this.props.addToCart(this.props)}
                className="btn btn-primary btn-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
