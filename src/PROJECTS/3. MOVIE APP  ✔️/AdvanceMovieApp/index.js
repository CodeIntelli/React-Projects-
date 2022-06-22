import React from "react";
import AddMovie from "./components/AddMovie";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";
const AdvcanceMovieApp = () => {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Watchlist />
            </Route>
            <Route exact path="/watched">
              <Watched />
            </Route>
            <Route exact path="/addMovie">
              <AddMovie />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
};

export default AdvcanceMovieApp;
