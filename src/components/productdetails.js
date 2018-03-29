import React from "react"
import "./productdetails.css"

class ProductDetails extends React.Component {
    constructor() {
        super();
    }
    
    selectedSizeDirty = '';

    // Instead of this you could also do a bind when setting the function?
    handleAddToCartClick = () => {
        this.props.addToCartClick(this.props.product, this.selectedSizeDirty);
    }

    sizeClick = (data, e) => {
        console.log("size clicked");
        console.log(data);
        this.selectedSizeDirty = data;
    }

    render() {
        return ( 
            <div className="productdetails">
                <div>
                    <span>{this.props.product.name}</span>
                </div>
                <div className="price">
                    <span> {this.props.product.price}</span> 
                </div>
                <div className="sizes">
                    { 
                        // To handle "this" in loop use:
                        /* Like this
                        this.props.product.sizes.map(function(size) {
                            return <span onClick={this.sizeClick.bind(this, size)} className="size">{size}</span>;
                        }, this) 
                        
                        or like this;     (or use bind after last parenthesis on map)
                        */
                        this.props.product.sizes.map((size, index) => {
                            return <span onClick={this.sizeClick.bind(this, size)} className="size">{size}</span>;
                        })
                    }
                </div>
                <button onClick={this.handleAddToCartClick}>Add to cart</button>
            </div>
        );
    }
}

export default ProductDetails;