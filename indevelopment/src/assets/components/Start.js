import React from "react"
import {Link} from "react-router-dom"


class Start extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    //-----functions go here----
    hostState = ()=>{
        let hostState = {
            socket:null,
            socketId:null,
            active:false,
            players: [],
            messages: [{name:"Nico & Delane",message:"Survive the Flowjo!"}] 
        }
        localStorage.setItem("hostState",JSON.stringify(hostState))
    }
    playerState = ()=>{
        let playerState = {
            socket:null,
            socketId:null,
            roomId:null,
            name: null,
            active:false,
            inGame:false
        }
        localStorage.setItem("playerState",JSON.stringify(playerState))
    }

    render(){
        //-----page logic here---
        return(
            // <div>
            // <Link to="/host" onClick={this.hostState}>Host</Link>
            // <Link to="/player" onClick={this.hostState}>Join</Link>
            // <h1>Hello World!</h1>
            // <h1>hyuck hyuck hycuk</h1>
            // </div>

            <div class = "container" >
            <div class="row">
            <div class="col s12">
            <div  class ="container">
            <div id="intro-container" class = "card">
                    <div id = "intro"class ="card-content">
                        <h1>WELCOME TO FLOWJO</h1>
                    </div>
                    <div class = "card-tabs">
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab"><Link to="/host" onClick={this.hostState}>Host</Link></li>
                        <li class="tab"><Link to="/player" onClick={this.hostState}>Join</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
        )
        
    }
}

export default Start