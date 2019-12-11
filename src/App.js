import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

import TopLevelMenuBar from './components/TopLevelMenuBar';
import SecondaryMenuBar from './components/SecondaryMenuBar';

import Main from './views/main/Main'
import Videos from './views/videos/Videos'

const App = () => (
  <div className="App">
    <Router>
      <TopLevelMenuBar/>
      <SecondaryMenuBar/>
      <Switch>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>

  </div>
);

export default App;
