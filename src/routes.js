import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Rewards from "./pages/rewards";
import RewardsRegister from "./pages/rewardsRegister";
import Results from "./pages/results";
import Raffles from "./pages/raffles";
import PreviousRaffles from "./pages/previousRaffles";
import Participants from "./pages/participants";
import Menu from "./components/menu";

function Routes() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rewards">
            <Rewards />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/raffles">
            <Raffles />
          </Route>
          <Route path="/participants">
            <Participants />
          </Route>
          <Route path="/rewardsRegister">
            <RewardsRegister />
          </Route>
          <Route path="/previousRaffles">
            <PreviousRaffles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
