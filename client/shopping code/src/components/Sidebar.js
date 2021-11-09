import React, { Component } from 'react';
import Clothes from "./Clothes";
import Shoes from "./Shoes"
import Accesories from "./Accesories";
import Watches from "./Watches";
import Phones from "./Phones"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = ({
            clicked: false,
        })
    }
    render() {

        const { addItemToCart, showClothes, dataFromSql, showWatches, showAccesories, showPhones, showShoes } = this.props

        return (
            <div className="w-100 d-flex flex-row">
            <Router>
                <div className={(this.state.clicked === true) ? 'sidebar-expand' : 'sidebar'}>
                    <div className="w-25 text-center">
                        <button onClick={() => this.setState({ clicked: !this.state.clicked })} className={(this.state.clicked === true) ? 'w-25 sidebarIconButton' : 'w-100 sidebarIconButton'} alt="nice"><i className={(this.state.clicked === false) ? "bi bi-list fa-3x" : "bi bi-arrow-left-square fa-3x"}></i></button>
                    </div>
                    
                        <div className={(this.state.clicked === true) ? 'w-25 mt-5 d-flex flex-row' : 'd-lg-none d-flex flex-row'}>

                            <div className="categories">
                                <div className="category-links">
                                    <Link onClick={() => showClothes()} to="/Clothes.js">
                                        <i className="fas fa-tshirt"></i>
                                        Clothes
                                    </Link>

                                    <Link onClick={()=> showShoes()} to="/Shoes.js">
                                        <i className="fas fa-shoe-prints"></i>
                                        Shoes
                                    </Link>

                                    <Link onClick={() => showAccesories()} to="/Accesories.js">
                                        <i className="bi bi-earbuds"></i>
                                        Accesories
                                    </Link>

                                    <Link onClick={() => showWatches()} to="/Watches.js">
                                        <i className="bi bi-watch"></i>
                                        Watches
                                    </Link>

                                    <Link onClick={() => showPhones()} to="/Phones.js" >
                                        <i className="bi bi-tablet"></i>
                                        Phones
                                    </Link>
                                    <div className="sidebar-add">
                                        <iframe title="nice" src="https://giphy.com/embed/vvWhQsVAFkyisScAsM" width="200" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                </div>
                <div className="products">
                            <Switch>
                                <Route path="/Clothes.js" >
                                    <Clothes dataFromSql={dataFromSql} addItemToCart={addItemToCart} />
                                </Route>
                                <Route path="/Shoes.js" >
                                    <Shoes dataFromSql={dataFromSql} addItemToCart={addItemToCart} />
                                </Route>
                                <Route path="/Accesories.js" >
                                    <Accesories dataFromSql={dataFromSql} addItemToCart={addItemToCart} />
                                </Route>
                                <Route path="/Watches.js" >
                                    <Watches dataFromSql={dataFromSql} addItemToCart={addItemToCart} />
                                </Route>
                                <Route path="/Phones.js" >
                                    <Phones dataFromSql={dataFromSql} addItemToCart={addItemToCart} />
                                </Route>
                            </Switch>
                        </div>
                    </Router>
            </div>
        )
    }
}