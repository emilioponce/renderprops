import React, { Component } from "react";

import SharedComponent from "./SharedComponent";

class Component3 extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "#fce8c4", margin: "50px", padding: "50px" }}
      >
        <SharedComponent
          render={({ patterName }) => (
            <div>
              Il nome del modello è{" "}
              <span style={{ color: "orange", fontSize: "30px" }}>
                {patterName}
              </span>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Component3;
