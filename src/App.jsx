import React from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/explore">
            <Navbar />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
