import { Component } from "react";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    const { showModal } = this.state;
    return (
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItem_image}
          src={webformatURL}
          alt={tags}
          onClick={this.onToggleModal}
        />
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.onToggleModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
