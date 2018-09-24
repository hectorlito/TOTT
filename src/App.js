import React, { Component } from "react";
import "./App.css";
import Navbar from "./navbar.js";
import TTlogo from "./TTlogo.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img className="logo" src={TTlogo} />
        </div>
        <Navbar />
      </div>
    );
  }
}

export default App;
