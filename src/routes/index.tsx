import * as React from 'react';
import {Route, Switch} from 'react-router';
import About from '../views/About';
import Home from '../views/Home';
import NoMatch from '../views/NoMatch';

const routes = (
  <Switch>
    <Route exact={true} path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route component={NoMatch}/>
  </Switch>
);

export default routes
