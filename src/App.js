import React, { Component } from "react";
import "./App.css";
import Navbar from "./navbar.js";
import TTlogo from "./TTlogo.jpg";
import Home from "./Home.js";

import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">
            <img className="logo" src={TTlogo} alt="logo" />
          </Link>

          <Navbar className="nav" />
        </div>
        <main>
          <Route exact path="/" />
        </main>
      </div>
    );
  }
}

export default App;
