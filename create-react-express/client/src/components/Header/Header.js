import React from "react";
import "./Header.css";
import Background from "../../media/wallpapers/hardwood.jpg";
import Dojo from "../../media/Icons/nojo.png"





function Header () {
    return (
        <div className ="container">
        <nav className = "headerBody">
            <div className = "container">
                <div className ="row">
                    <div className = "col s2">
                   <img src = {Dojo}></img>
                    </div>
                    <div className = "col s6">
                    <p id ="center-logo">The Flowjo</p>
                    </div>
                    <div className = "col s4">
                    <i id = "account-icon" class="far fa-user-circle"></i>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Header;