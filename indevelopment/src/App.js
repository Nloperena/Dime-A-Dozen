import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


//components-------------------------------------
import Start from './assets/components/Start'
import Host from './assets/components/Host'
import Player from './assets/components/Player'

//-----------------------------------------------

class App extends Component {

routing = (
  <Router>
    
    

    <div>
      <div className="container">
      <Link to=""></Link>
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
