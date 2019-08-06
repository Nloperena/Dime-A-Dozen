import React from "react";
import "./Header.css";
import "../../media/cap.png"
import logo from "../../media/cap.png"
import coin from "../../media/coinflip.gif"

function Header () {
    return (
        <div className ="container">
        <nav className = "headerBody">
            <div className = "container">
                <div className ="row">
                    <div className = "col s2">
                        <img id ="coinflip" src ={coin}></img>
                    </div>
                    <div className = "col s6">
                    <p id ="center-logo">Dime-A-Dozen</p>
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