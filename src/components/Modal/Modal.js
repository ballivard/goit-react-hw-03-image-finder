import React, { PureComponent } from "react";
// import PropTypes from 'prop-types';
// import { Test } from './Modal.styles';
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");
class Modal extends PureComponent {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL } = this.props;
    return createPortal (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          {this.props.children}
          <img src={largeImageURL} alt="No available"/>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;