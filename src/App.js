import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Render Props Example</h1>
        </header>
        <p>
          This 3 react components are sharing common information: the pattern
          name.
        </p>
        <Component1 />
        <Component2 />
        <Component3 />
      </div>
    );
  }
}

export default App;
