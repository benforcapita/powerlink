import React from "react";
import Team from "./components/Pages/Team";
import TeamDetails from "./components/Pages/Team-Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import "../src/assets/scss/app.scss";

function App() {
  return (
    <Router>
      <div>
        <div className="container py-5">
          <Switch>
            <Route exact path="/">
              <Team />
            </Route>
            <Route path="/team-details/:id">
              <TeamDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
