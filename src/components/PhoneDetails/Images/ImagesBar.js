import React, { Component } from 'react';

class ImagesBar extends Component {

  onChange(e) {
    this.props.selectedImage(e);
  }

  render() {
    return (
      <div className="imagesMiniatures">
        {  this.props.images.map(function (image) {
          console.log(image);
          return <img onClick={() => this.onChange(image)} src={`../../../assets/${image}`} className="img-responsive" />;
        }.bind(this))}
      </div>
    );
  }
}

export default ImagesBar;
