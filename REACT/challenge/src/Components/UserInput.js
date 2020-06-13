import React, { Component } from "react";

class Input extends Component {
  render() {
    return(
      <input type="text" onChange={this.props.change} value={this.props.text} />
    )
  }
}

export default Input;
