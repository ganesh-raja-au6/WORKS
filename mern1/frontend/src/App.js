import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import User from './users/pages/users'
import Place from './places/pages/newPlace'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <User />
        </Route>
        <Route path='/places/new' exact>
          <Place />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
