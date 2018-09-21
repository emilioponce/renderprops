import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import SharedComponent from "./SharedComponent";

/**
 * En este ejemplo se muestra el uso del patrón render props para compartir funcionalidad común entre diferentes componentes.
 * En este caso el componente APP utiliza otro componente para renderizar el valor de la variable 'secretToLife'
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Render Props Example</h1>
        </header>
        <SharedComponent
          render={({ secretToLife }) => (
            <h2>
              Secret to life is:
              <div style={{ color: "green", fontSize: "200px" }}>
                {secretToLife}
              </div>
            </h2>
          )}
        />
      </div>
    );
  }
}

export default App;
