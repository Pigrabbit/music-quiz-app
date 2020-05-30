import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class QuizEndPage extends React.Component {
  constructor(props) {
    super(props);
    this.state.numCorrect = this.props.location.state.numCorrect;
    this.state.numTotal = this.props.location.state.numTotal;
  }

  state = {
    numCorrect: 0,
    numTotal: 0,
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <section className="container">
          <h1>Thank you for taking quiz! visit agian!!</h1>
          <h3>
            Your Score: {this.state.numCorrect} / {this.state.numTotal}
          </h3>
          <Link to={{ pathname: "/" }}>
            <button>
              <p>Back to Home</p>
            </button>
          </Link>
        </section>
      </div>
    );
  }
}

export default QuizEndPage;
