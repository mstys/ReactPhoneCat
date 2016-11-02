/* eslint-disable */
import React, {Component} from 'react';

class SearchBox extends Component {

  onChange(e) {
    this.props.onChange(e.target.value);
  }


  render() {
    return (
      <div className="searchBox">
        <input type="text" onChange={this.onChange.bind(this)} value={this.props.value}/>
      </div>
    )
  }
}

export default SearchBox;
