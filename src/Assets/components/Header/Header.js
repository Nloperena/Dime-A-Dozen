import React from "react";
import "./Header.css";
//import Background from "../../media/wallpapers/woodpanels.jpg";
import Dojo from "../../media/Icons/dojo.png"
    





function Header () {

    
    return (
        <div class ="container">
        <nav className = "headerBody">
            <div className = "container">
                <div className ="row">
                    <div className = "col s2 offset-s1">
                   <img id = "dojo-icon" src = {Dojo} />
                   </div>
                    <div className = "col s6 offset-s1">
                    <p id ="center-logo">The Flowjo</p>
                    </div>
                    
                </div>
                </div>
                
        </nav>
        </div>
        
    );
}

export default Header;