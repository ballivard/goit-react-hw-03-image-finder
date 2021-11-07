import React, { PureComponent } from "react";

class Button extends PureComponent {
  state = {
    hasError: false,
  };

  render() {
    return (
      <button className="ButtonWrapper" onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

export default Button;