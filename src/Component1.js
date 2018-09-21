import React, { Component } from "react";

import SharedComponent from "./SharedComponent";

class Component1 extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "#c3fcbd", margin: "50px", padding: "50px" }}
      >
        <SharedComponent
          render={({ patterName }) => (
            <div>
              The pattern's name is{" "}
              <span style={{ color: "green", fontSize: "30px" }}>
                {patterName}
              </span>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Component1;
