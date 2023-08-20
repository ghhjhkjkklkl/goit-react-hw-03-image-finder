import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import PropTypes from "prop-types";
import { Component } from "react";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handlerKeyDown);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlerKeyDown);
    document.body.style.overflow = "visible";
  }

  handlerKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onClickHandler = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={this.onClickHandler}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

//

export default Modal;
