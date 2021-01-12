import React, { Component } from "react";

import "./Button.scss";

class Button extends Component {
  render() {
    return (
      <button
        className={this.props.className}
        type={this.props.type}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
