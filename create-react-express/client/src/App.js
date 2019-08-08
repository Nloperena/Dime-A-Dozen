import React, { Component } from "react";
import Header from "./components/Header";
import Boom from "./components/Boom";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
      
        <Boom />
        
        
        
        {/* <Awesomebutton />
        {/* <Awesomebutton /> */}
      </div>
      
    );
  };
}

export default App;
