import { Component } from 'react'

class Shoes extends Component {

    render() {

        const { addItemToCart, dataFromSql } = this.props

        const product = dataFromSql.map((item, key) => {
            return <div key={key} className={`item + ${key} d-flex flex-column`}>
                <label className="name text-center mb-2">{item.name}</label>
                <img className="item-image" src={item.imgs} alt="img" />
                <div className="details">
                    <label className="price">{item.price}$</label>
                    <button type="button" className="btn btn-primary addtocart" onClick={() => addItemToCart(item)}> Add Cart</button>
                </div>
            </div>
        }
        )
        return <div className="row">{product}</div>
    }
}

export default Shoes;