import 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './app/App';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/:phoneId" component={PhoneDetails}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
