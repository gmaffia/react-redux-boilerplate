import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Import Components
import Main from './components/main.jsx';
import Navigation from './components/navigation.jsx';
import About from './components/about.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('#boilerplate'));