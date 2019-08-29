import React from "react"
import io from "socket.io-client"
import PlayerList from "./PlayerList"
import Game from "./Game"

const socketUrl = "/"

if(localStorage.getItem("hostState") === null){
  let hostState = {
    socket:null,
    socketId:null,
    active:false,
    players: [],
    messages: [{name:"Nico & Delane",message:"Survive the Flowjo!"}] 
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
            players: [],
            messages: [{name:"Nico & Delane",message:"Survive the Flowjo!"},{name:"Sensei",message:"good luck..."}] 
        }

        
        
    }
    //-----functions go here----
    hostActive = ()=>{this.state.socket.emit('hostActive', {socketId:this.state.socketId})};

    setName = () =>{
      console.log("btn fired");
      
      this.setState((prevState)=>(
          {players: prevState.players.concat([{name:document.getElementById("playerName").value}])}
        ),
          ()=>{console.log(this.state.players)}
      )
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
          players: savedState.players,
          messages:savedState.messages
        })
        }

        this.initSocket()

    }

    componentDidUpdate(){
      let currentState = {
        socket:null,
        socketId:this.state.socketId,
        active:this.state.active,
        players: this.state.players,
        messages: this.state.messages
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

        socket.on('message',data=>{
          console.log(data)
          this.setState((prevState)=>(
            {messages: prevState.messages.concat([data])}
          ),
            ()=>{console.log(this.state.messages)}
          )
        })

      })
      this.setState({socket})
    }
    

    render(){
      //-----page logic here---
      if(this.state.active === false){return(
            // <div>
            // <h1>Host Page!</h1>
            // <h2>{this.state.socketId}</h2>
            // <br/>
            // <h2>Players</h2>
            // <PlayerList players={this.state.players} />
            // <br />
            // <input type="text" id="playerName" />
            // <button onClick={this.setName}>name</button>

            // <br/><br/><br/>
            // <button onClick={this.gameStart}>Start Game!</button>
            // </div>

            <div class ="container">
            <div class="row">

                <div class="col s3 pink lighten-3 host">
                <h5>Host</h5>
                </div>


                </div>

            <div class="row">

                <div class="col s3 pink lighten-3 players details">
                <h2>Players</h2>
                <PlayerList players={this.state.players} />
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
                    <a class="waves-effect waves-light btn-large blue lighten-3" onClick={this.setState({players:[]})}><i class="material-icons right" alt="">cloud</i>Dump</a>
                    </div>
                    <div class ="col s6">
                    <a onClick = {this.gameStart}><i class="material-icons right " alt="">cloud</i>Start</a>
                    </div>
                </div>

    </div>
        )
      }
      else{return(
        <div>
          <h1>the game!</h1>
          <Game players={this.state.players} messages={this.state.messages}/>
        </div>
      )
      }

    }
}

export default Host