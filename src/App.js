import React, { Component } from "react";
import Images from "./Images";
import Buttons from "./Buttons";
import Footer from "./Footer";
import { API_URL } from "./config";
import "./App.css";

const toastColor = {
  background: "#505050",
  text: "#fff"
};

export default class App extends Component {
  state = {
    loading: true,
    uploading: false,
    images: []
  };

  componentDidMount() {
    debugger;
    fetch(`${API_URL}/wake-up`).then(res => {
      debugger;
      if (res.ok) {
        alert("Connection to server succesful.");
        this.setState({ loading: false });
      } else {
        alert("Something went wrong with the server.");
      }
    });
  }

  onChange = e => {
    const errs = [];
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      const msg = "Only 3 images can be uploaded at a time";
      return alert(msg);
    }

    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`);
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }

      formData.append(i, file);
    });

    if (errs.length) {
      return errs.forEach(err => alert(err));
    }

    this.setState({ uploading: true });

    fetch(`${API_URL}/image-upload`, {
      method: "POST",
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          throw res;
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
        err.json().then(e => {
          alert(e.message);
          this.setState({ uploading: false });
        });
      });
  };

  filter = id => {
    return this.state.images.filter(image => image.public_id !== id);
  };

  removeImage = id => {
    this.setState({ images: this.filter(id) });
  };

  onError = id => {
    alert("Oops, something went wrong");
    this.setState({ images: this.filter(id) });
  };

  render() {
    const { loading, uploading, images } = this.state;

    const content = () => {
      switch (true) {
        case loading:
          return <h1>Loading ...</h1>;
        case uploading:
          return <h1>Uploading ...</h1>;
        case images.length > 0:
          return (
            <Images
              images={images}
              removeImage={this.removeImage}
              onError={this.onError}
            />
          );
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };

    return (
      <div className="container">
        <div className="buttons">{content()}</div>
        <Footer />
      </div>
    );
  }
}
