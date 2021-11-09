import React, { Component } from 'react'

class Phones extends Component {  
   
    render(){
        const { addItemToCart, dataFromSql } = this.props
     
        const product = dataFromSql.map((item, key) => {
            return <div key={key} className={`item + ${key} d-flex flex-column`}>
            <label className="name text-center mb-2">{item.name}</label>
                <img className="item-image" src={item.image} alt="item"/>
                <div className="details">
                    <label className="price">{item.price}</label>
                    <button type="button" className="btn btn-primary addtocart" onClick={() => addItemToCart(item, key)}> Add Cart</button>
                </div>
            </div>
        }
        )
        return <div className="row">{product}</div>
    }
}

export default Phones;

