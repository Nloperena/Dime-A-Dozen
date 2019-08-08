import React from "react";
import "./Boom.css";
import Boombox from "../../media/Icons/boombox.png"


export class Boom extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div id = "content" className ="container">
            <div className ="row">
                <img id ="boombox" src ={Boombox}/>
            </div>
        </div>

        )};
}

export default Boom;