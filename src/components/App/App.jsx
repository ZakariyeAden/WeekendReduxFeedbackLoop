import { useState } from "react";
import axios from "axios";
import "./App.css";
// Components
import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding";
import Review from "../Review/Review";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
// React Router
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route path="/" exact>
          <Feelings  />
        </Route>
        <Route path="/understanding">
          <Understanding  />
        </Route>
        <Route path="/comments">
          <Comments  />
        </Route>
        <Route path="/support">
          <Support  />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
      </Router>
    </div>
  );
}

export default App;
