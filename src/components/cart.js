import React from "react"
import './cart.css';

class Cart extends React.Component {
    render() {
        return (<div>
            <div className="cart">Cart
            <div>
            {
                this.props.cart.products.map((product, index) => {
                    return <div>
                        <span className="cart-info">{index + 1}.</span>
                        <span className="cart-info">{product.name}</span>
                        <span>{product.price}</span>
                        <span className="cart-info">{product.selectedSize}</span>
                        </div>;
                })
            }
            </div>
            </div>
        </div>);
    }
}

export default Cart;