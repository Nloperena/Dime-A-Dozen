import React, {Component } from "react";
import "./Container.css";
import Phase1 from "../Phase1";
import Phase2 from "../Phase2";


class Container extends Component {
    render() {
        return (
            <div>

            <div class = "container">
             <Phase1 />
             <Phase2 />
                
            </div>
            </div>
        )
    }
}

export default Container;