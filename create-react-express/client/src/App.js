import React, { Component } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
// import Awesomebutton from "./components/Awesomebutton";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
        {/* <Awesomebutton /> */}


      </div>
      
    );
  }
}

export default App;
