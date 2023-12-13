import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Discuss from './components/Discuss';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/discuss" exact component={Discuss} />
      </Switch>
    </Router>
  );
}

export default Routes;
