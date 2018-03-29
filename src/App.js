import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './components/cart'
import ProductDetails from './components/productdetails'

const productFromBackend = {
  "name": "Tunika",
  "price": 199.50,
  "sizes": [ 'S', 'M', 'L']
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: { sizes: []},
      cart: { products: []}
    };
  }

  componentDidMount() {
    this.setState({
      product: productFromBackend
    });
  }

  addToCartClick = (product, selectedsize) => {
    var cartProduct = {
      name: product.name,
      price: product.price,
      selectedSize: selectedsize
    };
    this.setState({
      cart: {
        products: this.state.cart.products.concat([cartProduct])
      }
    });
  }

  render() {
    return (
      <div className="App">
        <p>
          Product page
        </p>
        <Cart cart={this.state.cart}></Cart>
        <br/>
        <ProductDetails product={this.state.product} addToCartClick={this.addToCartClick}></ProductDetails>
      </div>
    );
  }
}

export default App;
