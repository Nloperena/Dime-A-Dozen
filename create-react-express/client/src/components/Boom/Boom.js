import React from "react";
import "./Boom.css";
import Doggogif from "../../media/gifs/Shiba.gif"


export class Boom extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div id = "content" className ="container">
            <div className ="row">
                <div className ="col-s4 offset-s2">
                <img id ="boombox" src ={Doggogif}/>
                </div>
            </div>
            <div className ="row">
                <div className="col-s1"><a className="board waves-effect waves-light pink lighten-1 btn-large">Biography</a>
                                        <a className="board waves-effect waves-light pink lighten-1 btn-large">Portfolio</a>
                                        <a className="board waves-effect waves-light pink lighten-1 btn-large">Contact Me</a></div>
            </div>
        </div>

        )};
}

export default Boom;