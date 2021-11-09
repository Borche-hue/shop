import { Component } from "react";
import Axios from "axios";


class LoginOrContinue extends Component {
    constructor() {
        super();
        this.state = ({
            username: '',
            password: '',
        })
    }

    login = () => {
        Axios.post("http://localhost:3000/login", {
            username: this.state.username,
            password: this.state.password
        }).then((response) => {
            console.log(response)
        })
    }

    render() {
        const { showComponent } = this.props

        return <div className="d-flex position-absolute login">
            <div className="close h-100">
                <button className="close-button" onClick={() => showComponent('shopMore')}>X</button>
                {/* <i className="bi bi-x-square fa-3x"></i> */}
            </div>
            <div className="login-container w-100">
                <form className="d-flex flex-column justify-content-center">
                    <h3>Log in</h3>
                    <input onChange={(e) => this.setState({username: e.target.value})} type="text" placeholder="Username"></input>
                    <input onChange={(e) => this.setState({password: e.target.value})} type="password" placeholder="Password" ></input>
                    <button onClick={() => this.login} type="submit" className="btn btn-success w-50">Log In</button>
                    <button onClick={() => showComponent('shopMore')} className="continueButton">Or continue as a costumer</button>
                </form>
            </div>
        </div>
    }
}

export default LoginOrContinue;