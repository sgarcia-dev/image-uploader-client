import React, { Component } from 'react';
import Images from './ImagePreview';
import UploadForm from './UploadForm';
import { API_URL } from './config';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      uploading: false,
      error: null,
      images: []
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/wake-up`)
      .then(res => {
        if (res.ok) {
          this.setState({ loading: false });
        } else {
          this.onServerError(res);
        }
      })
      .catch(err => this.onServerError(err));
  }

  onServerError(err) {
    this.setState({
      loading: false,
      error: err
    });
    console.error('[ERROR]', err);
  }

  handleFormSubmit = formData => {
    this.setState({ uploading: true });
    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res);
        }
        return res.json();
      })
      .then(images => {
        this.setState({
          uploading: false,
          images
        });
      })
      .catch(err => {
        this.onServerError(err);
      });
  };

  renderContent() {
    const { loading, uploading, error, images } = this.state;

    if (loading) {
      return <h1>Loading ...</h1>;
    } else if (uploading) {
      return <h1>Uploading ...</h1>;
    } else if (error) {
      return <h1>There was a problem with the server.</h1>;
    } else if (images && images.length > 0) {
      return <Images images={images} />;
    } else {
      return <UploadForm handleFormSubmit={this.handleFormSubmit.bind(this)} />;
    }
  }

  render() {
    return <div className="container">{this.renderContent()}</div>;
  }
}
