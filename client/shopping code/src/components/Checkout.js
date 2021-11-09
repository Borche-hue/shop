import { Component } from "react"

class Checkout extends Component {
    render() {
        const { cartItems, showComponent, removeItem, total, itemsInCart } = this.props

        const item = cartItems.map((item, key) => {
            return <div key={key} className='p-4 border border-dark w-100 d-flex justify-content-center flex-column'>
                <img className="m-auto" src={item.imgs} alt="item" width="150px" height="170px"></img>
                <div className="itemDetails d-flex flex-row">
                    <label className="w-50 h4 ">Name: <strong>{item.name}</strong></label>
                    <label className="w-50 h4 text-right">Price: <strong>{item.price}</strong></label>
                </div>
                <button onClick={() => removeItem(key)} className="btn btn-danger">Remove item</button>
            </div>
        })
        return <div className="d-flex flex-column w-100">
            <h1 className="m-auto mb-3 w-25 text-center">Checkout:</h1>
            <button className="btn btn-outline-danger w-25 text-center m-auto mb-3 btn-lg" onClick={() => showComponent('shopMore')}>Return to shop</button>
            <div className="w-100 total d-flex  d-flex justify-content-center">
                <label className="h3 total">Total: {total}$</label>
            </div>
            <div className="h1 d-flex w-50 m-auto justify-content-center mt-5 text-muted">{itemsInCart}</div> 
            <div className="m-auto w-25 itemInCart">{item}</div>
        </div>
    }
}

export default Checkout;