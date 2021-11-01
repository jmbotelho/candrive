import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import UserList from "./users/UsersList";
import UserView from "./users/UserView";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="container">
          <Switch>
            <Route path="/" exact component={UserList} />
            <Route path="/user/:id" component={UserView} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
