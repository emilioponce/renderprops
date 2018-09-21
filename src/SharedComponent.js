import React, { Component } from "react";

const PATTERN_NAME = "Render Props";

class SharedComponent extends Component {
  render() {
    return <div>{this.props.render({ patterName: PATTERN_NAME })}</div>;
  }
}

export default SharedComponent;
