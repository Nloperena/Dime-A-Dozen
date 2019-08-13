import React, {Component } from "react";
import "./Container.css";
import Gettingstarted from "../Gettingstarted";
import Header from "../Header";
import Button from "../Awesomebutton";

class Container extends Component {
    render() {
        return (
            <div>

            <div className = "container">
                <Header />
           </div>

            <Gettingstarted />
             <Button />
            </div>
        )
    }
}

export default Container;