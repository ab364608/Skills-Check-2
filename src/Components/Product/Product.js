import React from 'react';

export default function Product() {
        return (
            <div>
                <img src={this.props.element.mg} alt="img" />
                <h4>Product: {this.props.element.product}</h4>
                <h5>Price: {this.props.element.price}</h5>
                <button onClick={this.props.deleteProduct}>Delete Product</button>
            </div>

        )
    }