import React from "react";
import Header from "../components/Header";
import ProblemBox from "../components/ProblemBox";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const API_URI = "http://localhost:3900/api/problems";

class QuizTakingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state.category = this.props.location.state.category;
  }

  state = {
    category: "",
    problems: [],
  };

  async fetchMusicProblems() {
    const response = await fetch(API_URI);
    const problems = await response.json();

    this.setState({ problems }, () => {
      // console.log(this.state.problems);
    });
  }

  componentDidMount() {
    this.fetchMusicProblems();
  }
  
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="wrapper">
          <Header />
          <section className="container">
            <h1>Here comes the Quiz</h1>
            <h3>Category: {this.state.category}</h3>
            {this.state.problems.map((problem) => {
              return <ProblemBox problem={problem} />;
            })}
          </section>
        </div>
      </DndProvider>
    );
  }
}

export default QuizTakingPage;
