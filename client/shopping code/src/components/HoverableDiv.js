import React, { Component } from "react";

export default class HoverableDiv extends Component {

    render() {
        return (
            <div className="cart-items">
                <a href="Cart.js" className="cart-text">Go to Cart:</a>
                <div className="cart-number-items">
                    <a href="#" className="cart-link">
                        <h2><i className="bi bi-cart4"></i></h2>
                        <div className="NmbItemsInCart">
                            <label className="nmb-label">{this.props.count}</label>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}