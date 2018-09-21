import React, { Component } from "react";

import SharedComponent from "./SharedComponent";

class Component2 extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "#cfd2fc", margin: "50px", padding: "50px" }}
      >
        <SharedComponent
          render={({ patterName }) => (
            <div>
              <span style={{ color: "blue", fontSize: "30px" }}>
                {patterName}
              </span>{" "}
              es el nombre del patrón
            </div>
          )}
        />
      </div>
    );
  }
}

export default Component2;
