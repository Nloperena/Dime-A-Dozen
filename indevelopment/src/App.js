import React, {Component} from 'react';
import { BrowserRouter as Router, Route , Link} from "react-router-dom";

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
      <div class ="container">
        <nav className = "headerBody">
            <div className = "container">
                <div className ="row">
                    <div className = "col s2 offset-s1">
                   <img id = "dojo-icon" src = {Dojo} />
                   </div>
                    <div className = "col s4 offset-s1">
                    <p id ="center-logo">The Flowjo</p>
                    </div>
                    <div className = "col s1">
                    <a className="signinbutton board waves-effect waves-light pink lighten-4 btn-small login">Login</a>
                    </div>
                    <div className = "col s1">
                    <a className="signupbutton waves-effect waves-light pink lighten-4 btn-small signup">SignUp</a>
                    </div>  
                </div>
                </div>
                
        </nav>
        </div>
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
