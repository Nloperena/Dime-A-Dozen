import React from "react";
import ReactDOM from "react-dom";
import "./Signup.css";
import loginImg from "../../media/Icons/loginicon.png"

export class Signup extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className = "container">
                
                <div className = "row">
                <div className ="header"></div>
                </div>
                <div  id = "login-form" className = "content">
                    <div className = "image">
                        <img src ={loginImg} />
                        </div>
                        <div className = "form">
                        <div className = "form-group">
                            <div className = "container">
                                <p className ="white-text">New here? Sign up!</p>
                        <label className ="white-text" htmlFor="username">Username</label>
                        <input type ="text" name="username" placeholder ="username"></input>
                        </div>
                        <br />
                    </div>
                    <div className = "container">
                        <div className = "form">
                        <div className = "form-group">
                        <label className ="white-text" htmlFor="password">Password</label>
                        <input className ="border-color" type ="text" name="password" placeholder ="password" ></input>
                        </div>
                        </div>
                        </div>
                    <div className = "container">
                        <div className = "form">
                        <div className = "form-group">
                        <label className ="white-text" htmlFor="password">Confirm Password</label>
                        <input className ="border-color" type ="text" name="password" placeholder ="password" ></input>
                        </div>
                        </div>
                        </div>
                    </div>
                    <a class="waves-effect #ffc400 amber accent-3 white-text waves-light btn col-s6 offset-s6" id="submit-in">Sign Up</a>
                </div>
            </div>
        )};
}

export default Signup;