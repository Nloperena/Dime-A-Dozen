import React, {Component} from "react";
import "./Hostpage.css";
import Musicplayer from "../Musicplayer";

class Hostpage extends Component {
    
    state = {
        card:[ <div class ="container">
            <div class="row">

                <div class="col s3 pink lighten-3 host">
                <h5>Host</h5>
                </div>


                </div>

            <div class="row">

                <div class="col s3 pink lighten-3 players details">
                <h2>Players</h2>
                </div>

                <div class="col s9 blue lighten-3 details">
                <h1>Rules</h1>
                <div class="col s9 blue lighten-3" id ="rules">
                    <div class ="container">
                        <div class = "row">
                            <div class = "col s12">
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAH
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div class = "row">
                    <div class ="col s6">
                    <a class="waves-effect waves-light btn-large blue lighten-3"><i class="material-icons right" alt="">cloud</i>Dump</a>
                    </div>
                    <div class ="col s6">
                    <a onClick = {this.handleGame.bind(this)}class="waves-effect waves-light pulse btn-large pink lighten-3"><i class="material-icons right " alt="">cloud</i>Start</a>
                    </div>
                </div>

    </div>
    ]
    }

    handleGame() {
        this.setState({
            
            card: [<div class = "container">
            <div class="row">
            <div class="col s12">
            <div class = "container">
                                       <Musicplayer />
                                    </div>
                <div id="" class ="container  ">
                    <div id = "login-signup" class = "card gifbackground">
                        <div class ="card-content">
                            <div class = "container  center-align">
                                <h5>"Current Player"</h5>
                                <div class = "container center-align">
                                    <div class = "row offset-s6">
                                        <h3>RENDER WORD POOL</h3>
                                    </div>
                                    </div>
                                    
                                </div>
                        </div>
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






export default Hostpage;