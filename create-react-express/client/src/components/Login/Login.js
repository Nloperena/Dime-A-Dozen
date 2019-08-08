import React from "react";
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
                <div className ="header"></div>
                </div>
                <div  id = "login-form" className = "content">
                    <div className = "image">
                        <img src ={loginImg} />
                        </div>
                        <div className = "form">
                        <div className = "form-group">
                            <div className = "container">
                        <label className ="white-text" htmlFor="username">Username</label>
                        <input type ="text" name="username" placeholder ="username"></input>
                        </div>
                    </div>
                    
                    <div className = "container">
                        <div className = "form">
                        <div className = "form-group">
                        <label className ="white-text" htmlFor="password">Password</label>
                        <input className ="border-color" type ="text" name="password" placeholder ="password" ></input>
                        
                        
    </div>
    <a class="waves-effect #ffc400 amber accent-3 white-text waves-light btn col-s6 offset-s6" id="submit-in">Login</a>
    <br></br>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           
        )};

}

export default Login;