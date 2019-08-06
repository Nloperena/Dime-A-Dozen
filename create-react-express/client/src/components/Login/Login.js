import React from "react";
import ReactDOM from "react-dom";
import "./Login.css";
import loginImg from "../../media/Icons/loginicon.png"

export class Login extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className = "container">
                <div className = "row">
                <div className ="header">Sign and go with the flow!</div>
                </div>
                <div className = "content">
                    <div className = "image">
                        <img src ={loginImg} />
                        </div>
                        <div className = "form">
                        <div className = "form-group">
                        <label htmlFor="username">Username</label>
                        <input type ="text" name="username" placeholder ="username"></input>
                        </div>
                    </div>
                        <div className = "form">
                        <div className = "form-group">
                        <label htmlFor="password">Password</label>
                        <input type ="text" name="password" placeholder ="password"></input>
                        </div>
                    </div>
                </div>
            </div>
        )}

}

export default Login;