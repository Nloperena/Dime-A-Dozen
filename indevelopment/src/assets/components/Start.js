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
            <div>
            <Link to="/host" onClick={this.hostState}>Host</Link>
            <Link to="/player" onClick={this.playerState}>Join</Link>
            <h1>Hello World!</h1>
            <h1>hyuck hyuck hycuk</h1>
            </div>
        )
        

    }
}

export default Start