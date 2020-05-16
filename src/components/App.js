import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainPage from "../pages/index";
import NotFoundPage from "../pages/404";
import QuizTakingPage from "../pages/quizTakingPage";
import "../App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("App consturcted");
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component={NotFoundPage}/>
          <Route exact path="/quiz" component={QuizTakingPage}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
