import React from 'react';
import { validateImageFiles } from './validation';

class UploadForm extends React.Component {
  handleImageSelect(event) {
    const photoFiles = Array.from(event.target.files);
    const errors = validateImageFiles(photoFiles);
    if (errors.length) {
      return alert(`The following errors ocurred:\n\n${errors.join('\n')}`);
    } else {
      const newState = {};
      newState[event.target.name] = photoFiles;
      this.setState(newState);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    this.state.photos.forEach((file, index) => formData.append(`photo${index}`, file));
    this.props.handleFormSubmit(formData);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div>
          <label htmlFor="photos">Upload One or More Images</label>
          <input type="file" id="photos" name="photos" multiple onChange={this.handleImageSelect.bind(this)} />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

export default UploadForm;
