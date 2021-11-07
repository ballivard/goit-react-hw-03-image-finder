import React, { PureComponent } from "react";
// import PropTypes from "prop-types";

class GalleryItem extends PureComponent {
  handleClick = (e) => {
    if (e.target.nodeName === "IMG") {
      this.setState({ largeImageURL: e.target.dataset.large });
      this.props.handleLargeURLImage(e.target.dataset.large);
    }
  };
  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;

    return (
      <li
        className="GalleryItem"
        key={webformatURL}
        onClick={this.handleClick}
      >
        <img
          id={id}
          src={webformatURL}
          alt={tags}
          className="GalleryItem-image"
          onClick={this.handleClick}
          data-large={largeImageURL}
        />
      </li>
    );
  }
}

export default GalleryItem;