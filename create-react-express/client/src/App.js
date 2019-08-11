import React, { Component } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup"
// import Awesomebutton from "./components/Awesomebutton";
import "./App.css";
import IntroContent from "./components/IntroContent";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IntroContent />
      

      </div>
      
    );
  }
}

export default App;
