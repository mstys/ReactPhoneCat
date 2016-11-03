/**
 * Created by michal.stys on 03.11.2016.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
class Navbar extends Component {

  render() {
    return (
      <nav>
        <div className="navbar">
          <Link to="/"><h1>ReactPhoneApp</h1></Link>
        </div>
      </nav>
    )
  }
}

export default Navbar;
