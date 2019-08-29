import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css"

//components-------------------------------------
import Start from './assets/components/Start'
import Host from './assets/components/Host'
import Player from './assets/components/Player'
import Header from "./assets/components/Header";
//-----------------------------------------------

class App extends Component {

routing = (
  <Router>
    
    

    <div>
      <div className="container">
      <Header />
      <Route exact path="/" component={Start}/>
      <Route exact path="/host" component={Host}/>
      <Route path="/player" component={Player}/> 
      </div>
    </div>
  </Router>
)


  render(){
    return (
      <div>{this.routing}</div>
    );
  }
}

export default App;
