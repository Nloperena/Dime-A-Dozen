import React, { Component } from "react"
import Header from "../Header";
import "./Playerinfo.css"
import Dance from "../../media/gifs/dance.gif"



class Playerinfo extends Component {

    state = {
        card: this.setState.card = [[
            <div class = "container">
            <div class="row">
            <div class="col s12">
                <div id="forShadow" class ="container  ">
                    <div id = "login-signup" class = "card gifbackground2">
                        <div class ="card-content">
                            <div class = "container loading center-align">
                                <h5>"Enter Rapper Name"</h5>
                                <div class = "container center-align">
                                    <div class = "row">
                                       <input type ="text"></input>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                
                    <div class = "card-tabs">
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab pulse"><a class="active" href="#test5" onClick ={this.handleWait.bind(this)}>GO!</a></li>
                        <li class ="tab"><a class="active" href="#test5">Random Name</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>]]
    }

    handleWait() {
        this.setState({
            card : this.setState.card = [[
            <div class = "container">
            <div class="row">
            <div class="col s12">
                <div id="forShadow" class ="container  ">
                    <div id = "login-signup" class = "card gifbackground">
                        <div class ="card-content">
                            <div class = "container loading center-align">
                                <h5>"Player Name"</h5>
                                <div class = "container center-align">
                                    <div class = "row offset-s6">
                                        <h6>. . .Waiting. . .</h6>
                                    </div>
                                    <div class = "row">
                                       <img id = "dance" src={Dance}></img>
                                    </div>
                                    </div>
                                    <div class = "pink lighten-4 progress">
                                    <div class = "indeterminate black"></div>
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>]]
        })
    }

    render() {
        return(
            <div class = "content">
                <div className = "container">
                    <Header />
                </div>
              
                {this.state.card}
            </div>
        )
    }

}

export default Playerinfo;