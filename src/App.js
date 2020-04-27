import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Users from './user/pages/Users'

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Users />
      </Route>
      <Redirect to="/"/>
  </Router>
  )
}

export default App;
