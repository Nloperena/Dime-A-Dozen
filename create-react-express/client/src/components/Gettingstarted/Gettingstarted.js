import React, {Component } from "react";
import Hostpage from "../Hostpage";
import "./Gettingstarted.css";








class Gettingstarted extends Component {

    // Sets default state of the card

    state = {
        card:[<div class="row">
        <div class="col s12">
            <div class ="container">
                <div id = "login-signup" class = "card">
                    <div class ="card-content">
                        WELCOME TO FLOWJO
                    </div>
                    <div class = "card-tabs">
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab" onClick ={this.handleOptionHost.bind(this)}><a href="#test4">Host</a></li>
                        <li class="tab" onClick ={this.handleOptionJoin.bind(this)}><a class="active" href="#test5">Join</a></li>
                        
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>]
    }

//reset card
    handleReset() {
        this.setState({
            card:[<div class="row">
            <div class="col s12">
                <div class ="container">
                    <div id = "login-signup" class = "card">
                        <div class ="card-content">
                            WELCOME TO FLOWJO
                        </div>
                        <div class = "card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab" onClick ={this.handleOptionHost.bind(this)}><a href="#test4">Host</a></li>
                            <li class="tab" onClick ={this.handleOptionJoin.bind(this)}><a class="active" href="#test5">Join</a></li>
                            
                            
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>]
        });
    }


//  Handles the Host button
    handleOptionHost () {
        this.setState({
            card: this.setState.card = {Hostpage}
        })
    }

        // Handles the Join button
    handleOptionJoin () {
        this.setState({
            card: this.setState.card = [<div class="row">
            <div class="col s12">
                <div class ="container">
                    <div id = "login-signup" class = "card">
                        <div class ="card-content">
                            <div class = "container">
                                <h2>Join a room!</h2>
                            <input id = "Room-Code" type = "text" class = "validate"></input>
                        </div>
                        </div>
                        <div class = "card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab"><a class="active" href="#test5">JOIN</a></li>
                            <li class ="tab" onClick ={this.handleReset.bind(this)}><a class="active" href="#test5">Back</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>]
        })
    }


    

    render() {
        return(
            <div class = "content">
                {this.state.card}
            </div>
        )
    }
}

export default Gettingstarted;