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
          if(data.userId === this.state.userId){this.setState({inGame:true})}
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
        if(this.state.roomId === null || this.state.name === null || this.state.active === null || this.state.inGame === false)
        {return(
            <div>
              <h1>Player Page!</h1>
              <h1>it a remote!</h1>

              <input type="text" id="roomId" />
              <button onClick={this.setRoom}>roomid</button>
              <br />

              <input type="text" id="playerName" />
              <button onClick={this.setName}>name</button>
              <br />

              <button onClick={this.addPlayer}>Press Me</button>
            </div>
        )}
        else if(this.state.active === false && this.state.inGame === true){
          return(<h1>Waiting...</h1>)
        }
        else{
          return (
            <div>
              <input type="text" id="message" />
              <button onClick={this.sendMessage}>Send!</button>
            </div>
          )
        }

    }
}

export default Player