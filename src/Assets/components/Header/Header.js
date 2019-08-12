import React from "react";
import "./Header.css";
//import Background from "../../media/wallpapers/woodpanels.jpg";
import Dojo from "../../media/Icons/dojo.png"





function Header () {
    return (
        
        <nav className = "headerBody">
            <div className = "container">
                <div className ="row">
                    <div className = "col s2">
                   <img id = "dojo-icon" src = {Dojo} />
                    </div>
                    <div className = "col s8">
                    <p id ="center-logo">The Flowjo</p>
                    </div>
                    <div className = "col s1">
                    <a className="signinbutton board waves-effect waves-light pink lighten-4 btn-large contact-me">Login</a>
                    </div>
                    <div className = "col s1">
                    <a className="signupbutton waves-effect waves-light pink lighten-4 btn-large contact-me">SignUp</a>
                    </div>  
                </div>
            </div>
        </nav>
        
        
    );
}

export default Header;