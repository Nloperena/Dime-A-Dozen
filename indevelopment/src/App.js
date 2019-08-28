import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//components-------------------------------------
import Start from './assets/components/Start'
import Host from './assets/components/Host'
import Player from './assets/components/Player'
//-----------------------------------------------

class App extends Component {

routing = (
  <Router>
    
    {/* Header and the like goes here */}

    <div>
      <Link to=""></Link>
      <Route exact path="/" component={Start}/>
      <Route exact path="/host" component={Host}/>
      <Route path="/player" component={Player}/> 
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
