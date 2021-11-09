import React, { Component } from "react";
import logo1 from '../logo-images/logo1.png'
import logo from "../logo-images/logo.png"
import Cart from "./Cart";



class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isHovered: false,
        })

    }

    render() {
        const { quantity, filterBySearch, searchInput, count, cartItems, removeItem, itemsInCart, filterItemsMan, filterItemsWoman, total, showComponent } = this.props
        const { isHovered } = this.state

        return (
            <div className="navbar d-flex flex-column">
                <div className="d-flex flex-row welcome-text logo w-100">
                    <div className="d-flex logo float-left">
                        <a href="#" className="logo-img">
                            <img src={logo} alt="cart"></img>
                        </a>
                    </div>
                    <div className="w-75 text-center">
                        <h1>Welcome to
                            <img src={logo1} width='80px' height='80px' alt="img"></img>
                        </h1>
                    </div>
                    <div>
                        <button onClick={() => showComponent('login')} className="loginButton">Login as employee</button>
                    </div>

                </div>
                <div className="items-nav d-flex flex-row justify-content-between w-100">
                    <div className="buttons">
                        <button type="button" className="btn-man" onClick={() => filterItemsMan()}>MAN</button>
                        <button type="button" className="btn-woman" onClick={() => filterItemsWoman()}>WOMAN</button>
                    </div>
                    <div className="search-bar" >
                        <input type="text" 
                        className="search" 
                        placeholder="Seach..."
                        onKeyPress={() => {filterBySearch()}}
                        onChange={(e) => searchInput(e.target.value)}></input>
                        <i className="bi bi-search"></i>
                    </div>

                    <div className="cart-items ">

                        <a onClick={() => this.setState({ isHovered: (!isHovered) ? true : false })}
                            className="cart-text">
                            Click to see items:
                        </a>
                        {(isHovered) ? (
                            <Cart quantity={quantity} showComponent={showComponent} itemsInCart={itemsInCart} total={total} isHovered={isHovered} cartItems={cartItems} removeItem={removeItem} />
                        ) : ('')
                        }
                        <div className="cart-number-items">
                            <a className="cart-link">
                                <h2><i className="bi bi-cart4"></i></h2>
                                <div className="NmbItemsInCart">
                                    <label className="nmb-label">{count}</label>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;