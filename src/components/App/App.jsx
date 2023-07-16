import { useState } from "react";
import axios from "axios";
import "./App.css";
// Components
import Header from "../Header/Header";
import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding";
import Review from "../Review/Review";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import ThankYou from "../ThankYou/ThankYou";
// React Router
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route path="/" exact>
          <Feelings />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/thankYou">
          <ThankYou />
        </Route>
      </Router>
    </div>
  );
}

export default App;
