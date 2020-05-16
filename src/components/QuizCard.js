import React from "react";
import { Link } from "react-router-dom";
import "../QuizCard.css";

class QuizCard extends React.Component {
  constructor(props) {
    super(props);
    this.state.category = props.category;
  }

  state = {};

  render() {
    return (
      <article className="quizcard" id={this.state.category}>
        <h4 className="quizcard__category">{this.state.category}</h4>
        <Link to={{ pathname: "/quiz", state: { category: this.state.category } }}>
          <button className="quizcard__startBtn">
            <p>Take Quiz</p>
          </button>
        </Link>
      </article>
    );
  }
}

export default QuizCard;
