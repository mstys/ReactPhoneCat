/**
 * Created by michal.stys on 28.10.2016.
 */

import React, {Component} from 'react';
import axios from 'axios';
import PhoneListRow from './PhoneListRow';
import SearchBox from './PhoneListSort/SearchBox';
import SortDirection from './PhoneListSort/SortDirection';


class PhoneList extends Component {

  constructor() {
    super();
    this.state = {
      filter: '',
      order: 'date',
      phones: [],
    };

    this.getData();
    this.updateListBySearchBox = this.updateListBySearchBox.bind(this);
    this.updateListBySortBox = this.updateListBySortBox.bind(this);
  }

  getData() {
    axios.get('../module/phones.json').then(response => {
      this.setPhones(response.data);
    });
  }

  setPhones(data) {
    this.setState({
      phones: data,
    });
  }

  updateListBySearchBox(e) {
    this.setState({
      filter: e,
    });
  }

  updateListBySortBox(e) {
    this.setState({
      order: e,
    });
  }

  render() {
    let sortedPhones = [];


    // find phones by name
    this.state.phones.map(function(phone) {
      if (phone.name.toLowerCase().search(this.state.filter.toLowerCase()) !== -1) {
        sortedPhones.push(<PhoneListRow phoneData={phone}/>);
      }

    }.bind(this));


    //sort phones by date
    if (this.state.order === 'date') {
      sortedPhones.sort(function(a, b) {
        return parseFloat(a.props.phoneData.age) - parseFloat(b.props.phoneData.age);
      });
    }


    //sort phones by name
    if (this.state.order === 'name') {
      sortedPhones.sort(function(a, b) {
        return a.props.phoneData.name.localeCompare(b.props.phoneData.name);
      });
    }

    return (
      <div className="phoneList">
        <SearchBox onChange={this.updateListBySearchBox} />
        <SortDirection selected={this.updateListBySortBox} />

        {sortedPhones}
      </div>
    );
  }
}

export default PhoneList;
