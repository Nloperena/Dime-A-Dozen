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
            <div className ="row">
                <div className="col-s1"><a className="board waves-effect waves-light pink lighten-1 btn-large">Sound</a>
                                        <a className="board waves-effect waves-light pink lighten-1 btn-large">Sound</a>
                                        <a className="board waves-effect waves-light pink lighten-1 btn-large">Sound</a></div>

                <div className="col-s1"><a className="board waves-effect waves-light pink lighten-1 btn-large">Sound</a>
                                        <a className="board waves-effect waves-light pink lighten-1 btn-large">Sound</a>
                                        <a className="board waves-effect waves-light pink lighten-1 btn-large">Sound</a></div>

                <div className="col-s1"><a className="board waves-effect waves-light pink lighten-1 btn-large">Sound</a>
                                        <a className="board waves-effect waves-light pink lighten-1 btn-large">Sound</a>
                                        <a className="board waves-effect waves-light pink lighten-1 btn-large">Sound</a></div>
            </div>
        </div>

        )};
}

export default Boom;