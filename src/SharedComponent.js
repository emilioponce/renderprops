import React, { Component } from "react";

const SECRET_TO_LIFE = 42;

class SharedComponent extends Component {
  render() {
    return <div>{this.props.render({ secretToLife: SECRET_TO_LIFE })}</div>;
  }
}

export default SharedComponent;
