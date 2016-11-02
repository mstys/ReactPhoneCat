import 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import PhoneList from './components/PhoneList/PhoneList';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={PhoneList}/>
    <Route path="/:phoneId" component={PhoneDetails}/>
  </Router>,
  document.getElementById('root')
);
