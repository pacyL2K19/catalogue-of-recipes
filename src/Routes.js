import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './components/Details';
import Home from './containers/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
