import React from "react";
import Header from "../components/Header.js";
import fetchProblems from "../data";

class QuizTakingPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("quiztaking contructed");
    console.log(this.props.location.state.category);
    this.state.category = this.props.location.state.category;
  }

  state = {
    category: "",
    problems: [],
  };

  // Todo: get Problems and answers from backend
  getProblems() {
    const problems = fetchProblems();
    this.setState({ problems }, () => {
      console.log(this.state)
    });
  }

  componentDidMount() {
    this.getProblems();
  }

  // Todo: add music player component
  // Todo: add multiple choice component
  render() {
    return (
      <div className="wrapper">
        <Header />
        <section className="container">
          <h1>Here comes the Quiz</h1>
          <h3>Category: {this.state.category}</h3>
          {this.state.problems.map((problem) => {
            return (
              <div className="problem">
                <h3 className="problem__description">{problem.problemDescription}</h3>
                <ul className="problem__options">
                  {problem.options.map(option => {
                    return <li className="problem__options__option">{option}</li>
                  })}
                </ul>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default QuizTakingPage;
