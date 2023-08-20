import css from "./ImageGallery.module.css";
import PropTypes from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images }) {
  return (
    <ul className={css.imageGallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
