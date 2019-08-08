import React, { Component } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup"
import Boom from "./components/Boom";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Login />
        <Signup />
        <Boom />
        
        
        {/* <Awesomebutton />
        {/* <Awesomebutton /> */}
      </div>
      
    );
  };
}

export default App;
