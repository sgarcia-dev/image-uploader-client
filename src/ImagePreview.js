import React, { Component } from 'react';

class ImagePreview extends Component {
  onLoadingError(image) {
    alert('A problem ocurred loading the images.');
    console.error('[ERROR] Could not load uploaded image:', image);
  }

  renderImage(image, index) {
    return (
      <div key={index} className="fadein">
        <img
          src={image.secure_url}
          alt="Cloudinary Preview"
          style={{ width: '100%' }}
          onError={() => this.onLoadingError(image)}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Upload succesful!</h1>
        <p>Preview:</p>
        {this.props.images.map(this.renderImage)}
      </div>
    );
  }
}

export default ImagePreview;
