import React from "react"
import io from "socket.io-client"
import PlayerList from "./PlayerList"

const socketUrl = "http://172.16.133.88:8080"

if(localStorage.getItem("hostState") === null){
  let hostState = {
    socket:null,
    socketId:null,
    active:false,
    players: [] 
}
localStorage.setItem("hostState",JSON.stringify(hostState))
}

class Host extends React.Component{
    constructor(){
        super()

        this.state = {
            socket:null,
            socketId:null,
            active:false,
            players: [] 
        }

        
        
    }
    //-----functions go here----
    hostActive = ()=>{this.state.socket.emit('hostActive', {socketId:this.state.socketId})};

    setName = () =>{
      console.log("btn fired");
      
      this.setState((prevState)=>({players: prevState.players.concat([{name:document.getElementById("playerName").value}])}))
    }

    gameStart = () =>{
      this.setState({active:true},()=>{this.hostActive()});

    }

    componentDidMount(){
      console.log(this.state.players)

      let hostState = JSON.parse(localStorage.getItem("hostState"))

        if(hostState.socketId !== null){
        let savedState = hostState
        this.setState({
          socketId: savedState.socketId,
          active: savedState.active,
          players: savedState.players
        })
        }

        this.initSocket()

    }

    componentDidUpdate(){
      let currentState = {
        socket:null,
        socketId:this.state.socketId,
        active:this.state.active,
        players: this.state.players
      }
      let saveState = JSON.stringify(currentState)
      localStorage.setItem("hostState", saveState)
    }
    
    initSocket = ()=>{
      const socket = io(socketUrl)

      socket.on('connect', ()=>{
        console.log("Connected: ",socket.id)
        if(this.state.socketId === null){this.setState({socketId: socket.id})}
        //this is where we create the room!
        socket.emit('newHost', {socketId: this.state.socketId})
        
        //handle players
        socket.on('addPlayer', data =>{
          console.log('adding player: '+data.name)
          this.setState(prevState =>({players: prevState.players.concat([data])}),()=>{
            console.log(this.state.players)
            socket.emit('inGame', data)
          })
        })

        socket.on('removePlayer', data=>{
          console.log('removing player: '+data.name)
            this.setState((prevState)=>({players:prevState.players.filter(players=>{
              return players.name !== data.name;
            }
          )}
        ))
        })

        //tells players that game has begun
        socket.on('hostStatus',()=>{
          if(this.state.active === true){
            socket.emit('hostActive',{socketId:this.state.socketId})
          }
        })

      })
      this.setState({socket})
    }
    

    render(){
      //-----page logic here---
      if(this.state.active === false){return(
            <div>
            <h1>Host Page!</h1>
            <h2>{this.state.socketId}</h2>
            <br/>
            <h2>Players</h2>
            <PlayerList players={this.state.players} />
            <br />
            <input type="text" id="playerName" />
            <button onClick={this.setName}>name</button>

            <br/><br/><br/>
            <button onClick={this.gameStart}>Start Game!</button>
            </div>
        )
      }
      else{return(
        <div>
          <h1>the game!</h1>
          <h1>{}</h1>
        </div>
      )
      }

    }
}

export default Host