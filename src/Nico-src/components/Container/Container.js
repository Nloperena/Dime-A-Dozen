import React, {Component } from "react";
import "./Container.css";
import Gettingstarted from "../Gettingstarted";
import Homepage from "../Hostpage";

class Container extends Component {
    render() {
        return (
            <div>

            <div class = "container">
             <Gettingstarted />
                
            </div>
            </div>
        )
    }
}

export default Container;