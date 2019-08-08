    import React from "react";
import "./Header.css";
import Background from "../../media/wallpapers/woodpanels.jpg";
import Nico from "../../media/Icons/Nico.png"






function Header () {
    return (
        <div className ="container">
        <nav className = " parallax-container headerBody">
            <div className = "container">
                <div className ="row">
                    <div className = "col s2">
                   
                    </div>
                    <div className = "col s6">
                    <p id ="center-logo">Nicholas Loperena</p>
                    </div>
                    <div className = "col s4">
                        <img id = "Nico" className = "circle responsive-img" src ={Nico}></img>
                    ,
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Header;