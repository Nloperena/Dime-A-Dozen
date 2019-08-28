import React, {Component} from "react"

class playerList extends Component{

    // constructor(props){}
    
    render(){
    let players = this.props.players
    let listItems = players.map(player => <li key={player.name}>{player.name}</li>)
    return (
    <ul>{listItems}</ul>
    )}
}

export default playerList