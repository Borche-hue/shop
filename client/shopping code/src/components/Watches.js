import React, { Component } from 'react';

class Watches extends Component {

    render() {

        const { addItemToCart, dataFromSql } = this.props

        const product = dataFromSql.map((value, key) => {
            return <div key={key} className={`item + ${key} d-flex flex-column`}>
                <label className="name text-center mb-2">{value.name}</label>
                <img className="item-image" src={value.image} alt="watch" />
                <div className="details">
                    <label className="price">{value.price}</label>
                    <button type="button" className="btn btn-primary addtocart" onClick={() => addItemToCart(value)}> Add Cart</button>
                </div>
            </div>
        }
        )
        return <div className="row">{product}</div>
    }
}

export default Watches;