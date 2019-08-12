import React, {Component } from "react";
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Hostpage from "../Hostpage";
import "./Gettingstarted.css";








class Gettingstarted extends Component {

    // Sets default state of the card

    state = {
        card:[<div class="row">
        <div class="col s12">
            <div id="forShadow" class ="container">
                <div id = "login-signup" class = "card">
                    <div class ="card-content">
                        <h1>WELCOME TO FLOWJO</h1>
                    </div>
                    <div class = "card-tabs">
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab"><Link to="/Room/01/">Host</Link></li>
                        <li class="tab" onClick = {this.handleOptionJoin.bind(this)}>Join</li>
                        
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
                <div id="forShadow" class ="container">
                    <div id = "login-signup" class = "card">
                        <div class ="card-content">
                            <h1>WELCOME TO FLOJO</h1>
                        </div>
                        <div class = "card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab" onClick ={this.handleOptionHost.bind(this)}><a href="#test4">Host</a></li>
                            <li class="tab" onClick ={this.handleOptionJoin.bind(this)}><a class="active" href="#test5">Join</a></li>
                            
                            <li><Link to = "/Room/01">Host</Link></li>
                            <li><Link to = "Join">Join</Link></li>
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
            card: this.setState.card = [<div class="row">
            {Hostpage} TEST
        </div>]//klkl
        })
    }

        // Handles the Join button
    handleOptionJoin () {
        this.setState({
            card: this.setState.card = [<div class="row">
            <div class="col s12">
                <div id="forShadow" class ="container">
                    <div id = "login-signup" class = "card">
                        <div class ="card-content">
                            <div class = "container">
                                <h2>Enter a room ID!</h2>
                            <input id = "Room-Code" type = "text" class = "validate"></input>
                        </div>
                        </div>
                        <div class = "card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab"><a class="active" href="#test5" onClick = {this.handleName.bind(this)}>GO!</a></li>
                            <li class ="tab" onClick ={this.handleReset.bind(this)}><a class="active" href="#test5">Back</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>]
        })
    }

    handleName() {
        this.setState({
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
        })
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
                {this.state.card}
            </div>
        )
    }
}

export default Gettingstarted;