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
    let problems = await response.json();
    problems = this.generateMultipleChoice(problems);
    this.setState({ problems }, () => {
      // console.log(this.state.problems);
    });
  }

  generateMultipleChoice(problems) {
    const tracks = problems.map((problem) => problem.track);
    const artists = problems.map((problem) => problem.artist);
    const withMultipleChoice = problems.map((problem, idx, problems) => {
      // 정답 (track, artist) 1 pair
      // 오답 track 2개, artist 2개
      const numberOfChoice = 2;
      let trackPool = problems
        .filter((p) => p.id !== problem.id)
        .map((p) =>  p.track);
      let trackOptions = trackPool
        .sort(() => 0.5 - Math.random())
        .slice(0, numberOfChoice);
      trackOptions.push(problem.track);

      let artistPool = problems
        .filter((p) => p.id !== problem.id)
        .map((p) => p.artist);
      let artistOptions = artistPool
        .sort(() => 0.5 - Math.random())
        .slice(0, numberOfChoice);
      artistOptions.push(problem.artist);
  
      return { ...problem, trackOptions, artistOptions };
    });
    return withMultipleChoice;
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
