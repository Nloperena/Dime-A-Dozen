import React, { Component } from "react"
import PlayerList from "./PlayerList"

class Game extends Component {
    constructor(props){

        super(props)
        this.state = {
            inPlayers:this.props.players,
            round:1,
            rapperIndex:0,
            count:0,
            gameOver:false,
            messages:this.props.messages,
            carouselIndex:0
        }
    }

    removeRapper = () => {
        console.log("btn fired")
        console.log(this.state.inPlayers)
        let loser = this.state.inPlayers[this.state.rapperIndex].name
        console.log("loser:"+loser)
        if(this.state.rapperIndex === this.state.inPlayers.length - 1){ this.setState({rapperIndex:0})}
        this.setState({inPlayers: this.state.inPlayers.filter(players=>players.name !== loser)},()=>{
        console.log(this.state.inPlayers)
        if(this.state.inPlayers.length === 1){
            console.log("game over")
            this.setState({gameOver:true})
        }})
    }

    render(){
        //page logic goes here
        if(this.state.gameOver === true){return(
            <div>
            <h1>Game Over!</h1>
            <h1>{this.state.inPlayers[0].name} survived the FlowJo!</h1>
            </div>
            )
        }
        else{return(
            <div>
                <h1>Hello World!</h1>
                <h1>current count: {this.state.count}</h1>
                <h1>current players:</h1>
                <PlayerList players={this.state.inPlayers} />
                <h1>rapper index: {this.state.rapperIndex}</h1>
                <h1>{this.state.inPlayers[this.state.rapperIndex].name}</h1>

                <br/>
                <h1>word:{this.state.messages[this.state.carouselIndex].message}</h1>
                <h1>from:{this.state.messages[this.state.carouselIndex].name}</h1>

                <br/>
                <button onClick={this.removeRapper}>WHACK!!</button>
            </div>
        )

        }
        
    }


    componentDidMount(){
        
        this.counter = setInterval(()=>{
                    this.setState({count:this.state.count + 1})
                    if(this.state.count >10 * this.state.round){
                        this.setState({count:0})
                        if(this.state.rapperIndex === this.state.inPlayers.length - 1){
                            this.setState({rapperIndex:0})
                            this.setState({round: this.state.round + 1})    
                        }
                        else{
                            this.setState({rapperIndex: this.state.rapperIndex + 1})
                        }
                    }
                }, 1000)    
        this.carousel = setInterval(()=>{
            if(this.state.carouselIndex < this.state.messages.length - 1){
                this.setState({carouselIndex: this.state.carouselIndex + 1})
            }
        }, 5000)
    }

    componentDidUpdate(prevProps){
        if(this.props.messages !== prevProps.messages){
            this.setState({messages:this.props.messages})
        }
    }
}

export default Game