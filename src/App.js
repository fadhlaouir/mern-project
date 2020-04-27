import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Users />
      </Route>
      <Route exact path="/places/new">
        <NewPlace />
      </Route>
      <Redirect to="/"/>
      </Switch>
  </Router>
  )
}

export default App;
