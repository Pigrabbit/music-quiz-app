import React from "react";
import Header from "../components/Header.js";
import fetchProblems from "../data";
import AudioPlayer from "../components/AudioPlayer.js";

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
  getMusicProblems() {
    const problems = fetchProblems();
    this.setState({ problems }, () => {
      console.log(this.state)
    });
  }

  componentDidMount() {
    this.getMusicProblems();
  }

  // Todo: add multiple choice component
  // Todo: get videoID and start, end info from BE
  render() {
    return (
      <div className="wrapper">
        <Header />
        <section className="container">
          <h1>Here comes the Quiz</h1>
          <h3>Category: {this.state.category}</h3>
          <AudioPlayer videoID="t7X8qhESIfs" start="5" end="15" />
          {/* {this.state.problems.map((problem, index) => {
            return (
              <div className="problem" key={index}>
                <h3 className="problem__description">{problem.problemDescription}</h3>
                <ul className="problem__options">
                  {problem.options.map((option, idx) => {
                    return <li className="problem__options__option" key={idx}>{option}</li>
                  })}
                </ul>
              </div>
            );
          })} */}
        </section>
      </div>
    );
  }
}

export default QuizTakingPage;
