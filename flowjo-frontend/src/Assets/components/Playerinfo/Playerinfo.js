import React, { Component } from "react"
import Header from "../Header";
import "./Playerinfo.css"
import Dance from "../../media/gifs/dance.gif"



class Playerinfo extends Component {

    state = {
        name: this.setState.rappername =[[
            
        ]],

        card: this.setState.card = [[
            <div class = "container">
            <div class="row">
            <div class="col s12">
                <div id="forShadow" class ="container  ">
                    <div id = "login-signup" class = "card gifbackground2">
                        <div class ="card-content">
                            <div class = "container loading center-align">
                                <h5>"Enter Rapper Name"</h5>
                                <div class = "container center-align">
                                    <div class = "row">
                                   <textarea defaultValue = {this.props.children} ></textarea> 
                                       
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                
                    <div class = "card-tabs">
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab pulse"><a class="active" href="#test5" onClick ={this.handleWait.bind(this)}>GO!</a></li>
                        <li class ="tab"><a class="active" href="#test5" onClick ={this.handleNameUpdate.bind(this)}>Choose Name</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>]]
    }


    getName() {

        var val = this.refs.nickname.value;
        console.log(val);
        this.setState({
            name : this.setState.rappername = [[

                    <div class = "container">
                    <div class ="row">
                    <div class = "col s12">
                    <div className ="container">
                    <div id = "intro-container" class ="card">
                    <div id = "intro" class = "card-content">
                    Delane
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    

                ]]
            })
    }



    handleNameUpdate (rapperName, i) {
        console.log("name is registered: " + i)
        var rapname = this.state.rappername
        this.setState({name: rapname})
    }

    handleWait() {

        this.setState({
            name: this.setState.rapperName =[[
                <div class = "container">
                <div class ="row">
                <div class = "col s12">
                <div className ="container">
                <div id = "intro-container" class ="card">
                <div id = "intro" class = "card-content">
                <h6 id = "rapperName">Delane</h6>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            ]]
        })
        
        this.setState({
            card : this.setState.card = [[
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
                                       <img id = "dance" src={Dance}></img>
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
        </div>]]
        })
    }

    //GAME FOR JOIN ON MOBILE VIEW

    handleGame() {
        
        this.setState({
            card: [<div class = "container">
            <div class="row">
            <div class="col s12">
                <div id="" class ="container  ">
                    <div id = "login-signup" class = "card gifbackground">
                        <div class ="card-content">
                            <div class = "container  center-align">
                                <h5 class = "white">"Player Name"</h5>
                                <div class = "container center-align">
                                    <div class = "row offset-s6">
                                        <h4>Enter a word to pull</h4>
                                        <h3><input class ="white" type="text"></input></h3>
                                    </div>
                                    <div class = "row">
                                       
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
                <div className = "container">
                    <Header />
                </div>
                {this.state.name}
                {this.state.card}
                
            </div>
        )
    }

}

export default Playerinfo;