import React, { Component } from "react";
import GalleryItem from "./GalleryItem";

class ImageGallery extends Component {
  handleClick = (e) => {
    console.log("gallery click");
  };
  handleLargeURLImage = (data) => {
    this.props.handleLargeURLImage(data);
  };
  render() {
    const { images } = this.props;
    return (
      <ul className="ImageGallery" id="imagesList">
        {images.map(({ id, webformatURL, largeImageURL, tags, user }) => (
          <GalleryItem
            onClick={this.handleClick}
            key={`${id}${user}`}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tag={tags}
            handleLargeURLImage={this.handleLargeURLImage}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
