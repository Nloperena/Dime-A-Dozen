import React, {Component} from "react";
import "./Joinpage.css";

class Joinpage extends Component {
    state ={
        card:[<div class="row">
        <div class="col s12">
            <div id="forShadow" class ="container">
                <div id = "login-signup" class = "card">
                    <div class ="card-content">
                        <h3>"Active Rapper Name</h3>
                        <div class ="container">
                            {/* Rapper Name */}
                        </div>
                    </div>
                    <div class ="card-content">
                        <h2> WORD CYCLE HERE</h2>
                        {/* Word to be pushed here */}
                    </div>
                    <div class ="card-content">
                        <h6>Array of players here</h6>
                        <div class ="container">
                            {/* array of players  */}
                        </div>
                    </div>
                    <a class="waves-effect waves-light btn-large blue lighten-3" onClick = {this.handleGame.bind(this)}>GAME START</a>
                </div>
            </div>
        </div>
    </div>]
    };

    handleGame() {
        this.setState({
            card:[<div class="row">
        <div class="col s12">
            <div id="forShadow" class ="container">
                <div id = "login-signup" class = "card">
                    <div class ="card-content">
                        <h1>Enter words to pool</h1>
                        <div class ="container">
                            <input type ="text" for = "wordpool" class ="validate pink lighten-4"></input> 
                        </div>
                    </div>
                    <div class ="card-content">
                    <a class="waves-effect waves-light btn-large pink lighten-4">Submit</a>
                    </div>
                </div>
            </div>
        </div>
    </div>]
        });
    }

    render () {
        return(
            <div class ="content">
                {this.state.card}
            </div>
        )
    }

}

export default Joinpage;