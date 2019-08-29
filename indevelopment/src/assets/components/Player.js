import React from "react"
import io from "socket.io-client"

const socketUrl = "/"

if(localStorage.getItem("playerState") === null){
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

class Player extends React.Component{
    constructor(){
        super()
        this.state = {
            socket:null,
            socketId:null,
            roomId:null,
            name: null,
            active:false,
            inGame:false
        }
        
    }
    //-----functions go here----

    componentDidMount(){

      let playerState = JSON.parse(localStorage.getItem("playerState"))
        if(playerState.userId !== null){
          let savedState = playerState
          this.setState({
            socketId: savedState.socketId,
            roomId: savedState.roomId,
            name: savedState.name,
            active: savedState.active,
            inGame: savedState.inGame
          }, ()=>{
            this.initSocket()
          })
        }
        else{this.initSocket()}
        
        
      }
    
    componentDidUpdate(){
      let currentState = {
        socket: null,
        socketId: this.state.socketId,
        roomId: this.state.roomId,
        name: this.state.name,
        active: this.state.active,
        inGame: this.state.inGame
      }
      let saveState = JSON.stringify(currentState)
      localStorage.setItem("playerState", saveState)
    }

    initSocket = ()=>{
      const socket = io(socketUrl)
      
      socket.on('connect', ()=>{
        console.log("Connected: ",socket.id) 

        socket.on('notRoom', ()=>{
          console.log("Not Room");
          this.setState({roomId:null});
        })
        socket.on('inRoom',()=>{
          console.log("In Room")
        })
        socket.on('hostActive',()=>{this.setState({active:true})});
        socket.on('disconnect', ()=>{
          socket.emit('exitRoom',{roomId:this.state.roomId,name:this.state.socketId})
        })
        socket.on('inGame',data=>{
          if(data.name === this.state.name){this.setState({inGame:true})}
        })
      this.setState({socket});
      if(this.state.socketId === null){this.setState({socketId:socket.id});}
      if(this.state.roomId !== null){socket.emit('joinRoom', {roomId: this.state.roomId})}
      })
      
    }

    setRoom = () =>{
      console.log("btn fired")
      let id = document.getElementById("roomId").value;
      this.setState({roomId: id},()=>{
        console.log(this.state.roomId)
        this.state.socket.emit('joinRoom', {roomId: this.state.roomId})
      })
      
    }

    setName = () =>{
      console.log("btn fired")
      let name = document.getElementById("playerName").value
      this.setState({name},()=>{
        console.log(this.state.name)
      })
    }
      
    addPlayer = ()=>{
      console.log("btn fired")
      this.state.socket.emit("addPlayer",{name:this.state.name,roomId:this.state.roomId});
    }

    hostStatus = ()=>{
      if(this.state.hostId === null){}
      else{
        this.state.socket.emit("hostStatus",{roomId:this.state.roomId});
      }
    }

    sendMessage = ()=>{
      let message = document.getElementById("message").value
      this.state.socket.emit("message",{obj:{name:this.state.name,message: message},roomId:this.state.roomId})
    }

    render(){
        //-----page logic here---
        if(this.state.roomId === null && this.state.name === null && this.state.active === null && this.state.inGame === false)
        {return(
            // <div>
            //   <h1>Player Page!</h1>
            //   <h1>it a remote!</h1>

            //   <input type="text" id="roomId" />
            //   <button onClick={this.setRoom}>roomid</button>
            //   <br />

            //   <input type="text" id="playerName" />
            //   <button onClick={this.setName}>name</button>
            //   <br />

            //   <button onClick={this.addPlayer}>Press Me</button>
            // </div>

            <div class = "container">
            <div class="row">
            <div class="col s12">
                <div id="forShadow" class ="container">
                    <div id = "login-signup" class = "card">
                        <div id = "intro"    class ="card-content">
                            <div class = "container">
                                <h2>Enter a room ID!</h2>
                            <input id = "RoomId" type = "text" class = "validate"></input>
                        </div>
                        </div>
                        <div class = "card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab"><a class="active" href="#test5" onClick = {this.setRoom}>GO!</a></li>

                            <li class ="tab" ><Link to="/">Back</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        )}
        else if(this.state.roomId !== null && this.state.name === null && this.state.active === null && this.state.inGame === false){
          <div class="row">
            <div class="col s12">
                <div id="forShadow" class ="container">
                    <div id = "login-signup" class = "card">
                        <div class ="card-content">
                            <div class = "container">
                                <h2>Enter a Rapper Name</h2>
                            <input id = "playerName" type = "text"  class = "validate"></input>
                        </div>
                        </div>
                        <div class = "card-tabs">
                        <ul class="tabs tabs-fixed-width">
                            <li class="tab pulse"><a class="active" href="#test5" onClick ={this.setName}>GO!</a></li>
                            {/* <li class ="tab"><a class="active" href="#test5">Random Name</a></li> */}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        else if(this.state.active === false && this.state.inGame === true){
          return(
            <div class = "container">
            <div class="row">
            <div class="col s12">
                <div id="forShadow" class ="container  ">
                    <div id = "login-signup" class = "card gifbackground">
                        <div class ="card-content">
                            <div class = "container loading center-align">
                                <h5>{this.setState.name}</h5>
                                <div class = "container center-align">
                                    <div class = "row offset-s6">
                                        <h6>. . .Waiting. . .</h6>
                                    </div>
                                    <div class = "row">
                                       <img id = "dance" src={Dance} alt="dance"></img>
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
        </div>
          )
        }
        else{
          return (
            // <div>
            //   <input type="text" id="message" />
            //   <button onClick={this.sendMessage}>Send!</button>
            // </div>

            <div class = "container">
            <div class="row">
            <div class="col s12">
                <div class ="container  ">
                    <div id = "login-signup" class = "card gifbackground">
                        <div class ="card-content">
                            <div class = "container  center-align">
                                <h4 class >{this.state.name}</h4>
                                <div class = "container center-align">
                                    <div class = "row offset-s6">
                                        <h6>Send a word to pool</h6>
                                        <h3><input class ="wordpoolme" type="text" id="message"></input></h3>
                                    </div>
                                </div>  
                            </div>
                        </div>
                                <div class = "card-tabs">
                                        <ul class="tabs tabs-fixed-width">
                                            <li class ="tab"><a class="active" href="#test5" onClick ={this.sendMessage}>Submit</a></li>
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
}

export default Player