/* eslint-disable */

import React, { Component } from 'react';
import ImagesBar from './ImagesBar';

class Images extends Component {

  constructor() {
    super();
    this.state = {
      currentImage: '',
    };
  }

  onClick(image) {
    this.setState({
      currentImage: image,
    });
  }

  render() {
    return (
      <div>
        <img onClick={this.onClick.bind(this)}
             src={this.state.currentImage === '' ? `../../../assets/${this.props.imagesPath[0]}` : `../../../assets/${this.state.currentImage}`} />
        <ImagesBar selectedImage={this.onClick.bind(this)} images={this.props.imagesPath}/>
      </div>
    );
  }
}

export default Images;
