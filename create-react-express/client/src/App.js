import React, { Component } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />


      </div>
      
    );
  }
}

export default App;
