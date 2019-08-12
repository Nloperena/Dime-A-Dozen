import React, { Component } from "react"
import Header from "../Header";


class Playerinfo extends Component {

    state = {
        card: this.setState.card = [[<div class="row">
        <div class="col s12">
            <div id="forShadow" class ="container">
                <div id = "login-signup" class = "card">
                    <div class ="card-content">
                        <div class = "container">
                            <h2>Enter a Rapper Name</h2>
                        <input id = "Rapper-Name" type = "text" class = "validate"></input>
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
    </div>]]
    }

    handleWait() {
        this.setState({
            card : this.setState.card = [[<div class="row">
            <div class="col s12">
                <div id="forShadow" class ="container">
                    <div id = "login-signup" class = "card">
                        <div class ="card-content">
                            <div class = "container">
                                <h2>"Player Name"</h2>
                                <div class = "row">
                                    <h3>Waiting...</h3>
                                    <br></br>
                                    <br></br>
                                    <br></br>
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
                <Header />
                {this.state.card}
            </div>
        )
    }

}

export default Playerinfo;