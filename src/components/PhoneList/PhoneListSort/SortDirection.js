/* eslint-disable */
import React, {Component} from 'react';


class SortDirection extends Component {

  constructor() {

    super();
    this.onChange = this.onChange.bind(this);

  }

  onChange(e) {

    this.props.selected(e.target.value);

  }

  render() {
    return (
      <select onChange={this.onChange}>
        <option value="date">date</option>
        <option value="name">name</option>
      </select>
    )
  }
}

export default SortDirection;
