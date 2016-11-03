/**
 * Created by michal.stys on 03.11.2016.
 */
import React, {Component} from 'react';
import PhoneList from '../components/PhoneList/PhoneList';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <main>
          {this.props.children || <PhoneList /> }
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
