/* eslint-disable */

import React, {Component} from 'react';
import {Link} from 'react-router';

class PhoneListRow extends Component {
  render() {
    return (
      <div className="phoneListRow row">
        <div className="col-md-2">
          <Link to={`/${this.props.phoneData.id}`}> <img src={`../assets/${this.props.phoneData.imageUrl}`} className="img-responsive"/></Link>
        </div>
        <div className="col-md-10">
          <Link to={`/${this.props.phoneData.id}`}><h3>{this.props.phoneData.name}</h3></Link>
          <p> {this.props.phoneData.snippet} </p>
        </div>
      </div>
    )
  }
}

export default PhoneListRow;
