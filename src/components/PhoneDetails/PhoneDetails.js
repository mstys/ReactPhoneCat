import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import Images from './Images/Images';

class PhoneDetails extends Component {

  constructor() {
    super();

    this.state = {
      phone: [],
      loaded: false,
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    axios.get(`../../module/${this.props.params.phoneId}.json`)
      .then(response => {
        this.setPhones(response.data);
      });
  }

  setPhones(phone) {
    this.setState({
      phone: phone,
      loaded: true,
    });
  }

  render() {
    return this.state.loaded ? (
      <div className="row">
        <div className="col-md-12 phoneDetails">
          <h2>{this.state.phone.name}</h2>
          <div className="phoneImage col-md-4">
            <Images imagesPath={this.state.phone.images}/>
          </div>
          <div className="phoneDescription col-md-7">
            <p><strong>Description:</strong> {this.state.phone.description}</p>
            <p>
              <strong>Android:</strong>
              <ul>
                <li>Os: {this.state.phone.android.os}</li>
              </ul>
            </p>
            <p>
              <strong>Battery:</strong>
              <ul>
                <li>Standby Time: {this.state.phone.battery.standbyTime}</li>
                <li>Talk time: {this.state.phone.battery.talkTime}</li>
                <li>Type: {this.state.phone.battery.type}</li>
              </ul>
            </p>
            <p>
              <strong>Display: import</strong>
              <ul>
                <li>Screen resolution: {this.state.phone.display.screenResolution}</li>
                <li>Screen size: {this.state.phone.display.screenSize}</li>
                <li>Touch Screen: {this.state.phone.display.touchScreen}</li>
              </ul>
            </p>
            <p>
              <strong> Additional Features</strong>
              {this.state.phone.additionalFeatures}
            </p>
          </div>
        </div>
      </div>
    ) : null;
  }
}

PhoneDetails.PropTypes = {
  phoneId: React.PropTypes.number.isRequired,
}

export default PhoneDetails;
