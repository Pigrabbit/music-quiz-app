import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainPage from "../pages/index";
import NotFoundPage from "../pages/404";
import QuizTakingPage from "../pages/quizTakingPage";
import "./App.css";
import QuizEndPage from "../pages/quizEnd";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/quiz" component={QuizTakingPage} />
          <Route exact path="/quizend" component={QuizEndPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
