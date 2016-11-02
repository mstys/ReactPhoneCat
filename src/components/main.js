/**
 * Created by michal.stys on 02.11.2016.
 */
import React, {Component} from 'react';
import {Header} from './Header/Header';
import PhoneList from './PhoneList/PhoneList';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <PhoneList />
        </main>
      </div>
    );
  }
}


export default Main;
