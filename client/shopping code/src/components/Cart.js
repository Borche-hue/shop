import React, { Component } from 'react';

export default class Cart extends Component {

    render() {
        const { cartItems, removeItem, total, itemsInCart, showComponent, quantity } = this.props;

        const item = cartItems.map((item, key) => {
            return <div key={key}>
                <div className="d-flex item-in-cart">
                    <div className="image">
                        <img src={item.image} width="150px" height="150px" alt="item"></img>
                    </div>
                    <div className="d-flex flex-column">
                        <label className="name">{item.name}</label>
                        <label className="price">{item.price}</label>
                        <label className="mt-5"> Quantity: {quantity} </label>
                        <button className="btn btn-danger " onClick={() => removeItem(key)}>Remove item</button>
                    </div>
                </div>
            </div>

        })
        return <div className="items-in-cart">
            <div >{item}</div>
            <div className={(item) ? "col text-center p-4 " : "d-lg-none"}>
               {itemsInCart}
                <div className="d-flex flex-column"> 
                    <label>Total: <label  className="totalToPay">{total}$</label></label>
                    <button onClick={() => showComponent('goToCheckout')} className="btn btn-success">Go to cart</button></div>
            </div>
        </div>
    }

}