import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">

      <Router>

        <nav>
          <Link to="/login"> Login || </Link>
          <Link to="/protected"> Friends </Link>
        </nav>

        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>

      </Router>
    </div>

  );
}

export default App;
