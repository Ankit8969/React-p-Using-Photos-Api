import React from "react";
import "../index.css";

class ImageList extends React.Component {
  render() {
    const { images } = this.props;
    return (
      <div className="box">
        {images.map((image) => (
          <div className="image" key={image.id}>
            <img src={image.urls.raw} alt={image.tags[0]} />
          </div>
        ))}
      </div>
    );
  }
}

export default ImageList;
