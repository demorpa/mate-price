import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PricePage from './pages/PricePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/mate-price' component={PricePage} />
      </Switch>
    );
  }
}

export default Routes;
