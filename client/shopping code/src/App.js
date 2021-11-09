import './App.css';
import React, { Component, useEffect } from 'react'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import LoginOrContinue from './components/LoginOrContinue';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seachInput: '',
      count: 0,
      cartItems: [],
      dataFromSql: [],
      total: 0,
      itemsInCart: 'No items in cart',
      checkout: false,
      mainShop: true,
      login: false,

    }
  }


  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/c8ec8d49be.js";
    script.async = true;

    document.body.appendChild(script);
  }

  itemCount = () => {
    this.setState({ count: this.state.count + 1 })

  }

  removeItem = (index) => {
    const { cartItems } = this.state

    this.setState({
      cartItems: cartItems.filter((props, i) => {
        return i !== index
      }),
      count: this.state.count - 1,
      total: parseInt(this.state.total - parseInt(cartItems[index].price)),
      itemsInCart: (this.state.count === 1) ? 'Your cart is emtpy' : '',
    })
    console.log(this.state.count)
  }


  showClothes = () => {
    Axios.get('http://localhost:3001/clothes').then((response) => {
      this.setState({ dataFromSql: response.data  })
    })
  }

  showWatches = () => {
    Axios.get('http://localhost:3001/watches').then((response) => {
      this.setState({ dataFromSql: response.data })
    })
  }

  showPhones = () => {
    Axios.get('http://localhost:3001/phones').then((response) => {
      this.setState({ dataFromSql: response.data })
    })
  }

  showAccesories = () => {
    Axios.get('http://localhost:3001/accesories').then((response) => {
      this.setState({ dataFromSql: response.data })
    })
  }

  showShoes = () => {
    Axios.get('http://localhost:3001/shoes').then((response) => {
      this.setState({ dataFromSql: response.data })
    })
  }


  filterItemsMan = () => {
    const { dataFromSql } = this.state

    var filteredItems = dataFromSql.filter(props => {
      return props.gender === 'male'
    })

    this.setState({ dataFromSql: filteredItems })
  }

  filterItemsWoman = () => {
    const { dataFromSql } = this.state

    var filteredItems = dataFromSql.filter(props => {
      return props.gender === 'female'
    })

    this.setState({ dataFromSql: filteredItems })
  }

  addItemToCart = (item, index) => {
    var newItem = item
    const { cartItems } = this.state
    cartItems.push(newItem)

    const checkIndex = cartItems.every((item) => { return item.id !== index })
    if (checkIndex !== -1) {
      this.setState({ cartItems: cartItems, count: this.state.count + 1, itemsInCart: (this.state.count === 1) ? 'Your Cart is emtpy' : '', total: parseInt(this.state.total + parseInt(newItem.price)) }) // })

    } else {
      this.setState({ itemsInCart: this.state.itemsInCart })
    }
  }

  showComponent = (component) => {
    switch (component) {
      case "goToCheckout":
        this.setState({ checkout: !this.state.checkout, mainShop: !this.state.mainShop })
        break;
      case "shopMore":
        this.setState({ mainShop: true, checkout: !this.state.checkout })
        break;
      case "login":
        this.setState({ mainShop: true, checkout: false , login: true})
        break;
      default:
        break;
    }
  }

  searchInput = (input) => {
    this.setState({ seachInput: input })
  }

  filterBySearch = () => {
    const {dataFromSql} = this.state

    const filteredItems = dataFromSql.filter((item) => item.name.toLowerCase().includes(this.state.seachInput))
    this.setState({dataFromSql: filteredItems})
  }


  render() {

    const { mainShop, checkout, count, login,  cartItems, dataFromSql, total, itemsInCart } = this.state;
    return (
      <div className="App">
        {login && <LoginOrContinue showComponent={this.showComponent}/>}
        
        {mainShop && <Navbar count={count}
          focusDiv={this.focusDiv}
          cartItems={cartItems}
          removeItem={this.removeItem}
          filterItemsMan={this.filterItemsMan}
          filterItemsWoman={this.filterItemsWoman}
          total={total}
          itemsInCart={itemsInCart}
          showComponent={this.showComponent}
          searchInput={this.searchInput}
          filterBySearch={this.filterBySearch}

        />}
        {mainShop && <Sidebar addItemToCart={this.addItemToCart}
          allItems={this.allItems}
          showClothes={this.showClothes}
          dataFromSql={dataFromSql}
          showWatches={this.showWatches}
          showAccesories={this.showAccesories}
          showPhones={this.showPhones}
          showShoes={this.showShoes}
        />}


        {checkout && <Checkout
          itemsInCart={itemsInCart}
          total={total}
          cartItems={cartItems}
          showComponent={this.showComponent}
          removeItem={this.removeItem} />}
      </div>
    );
  }
}


export default App;