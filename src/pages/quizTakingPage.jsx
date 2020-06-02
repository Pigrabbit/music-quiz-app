import React, { useState, useEffect, createContext } from "react";
import Header from "../components/Header";
import ProblemBox from "../components/ProblemBox";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Redirect } from "react-router";

const API_URI = "https://musicquiz.peeraurum.com/api/problems";

class QuizTakingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state.category = this.props.location.state.category;
    this.incrementProblemIdx = this.incrementProblemIdx.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
  }

  state = {
    category: "",
    redirect: false,
    score: 0,
    problemIdx: 0,
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

  incrementProblemIdx() {
    this.setState((state) => ({
      problemIdx: state.problemIdx + 1,
    }));
  }

  incrementScore() {
    this.setState((state) => ({
      score: state.score + 1,
    }));
  }

  isEnd() {
    return this.state.problemIdx === this.state.problems.length;
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
        .map((p) => p.track);
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

  componentDidUpdate() {
    if (this.isEnd()) {
      this.setState({
        redirect: true,
      });
    }
  }

  render() {
    return this.state.redirect ? (
      <Redirect
        to={{
          pathname: "/quizend",
          state: {
            numCorrect: this.state.score,
            numTotal: this.state.problems.length,
          },
        }}
      />
    ) : (
      <DndProvider backend={HTML5Backend}>
        <div className="wrapper">
          <Header />
          <section className="container">
            <h1>Here comes the Quiz</h1>
            <h3>Category: {this.state.category}</h3>
            <h4>
              Score: {this.state.score}/{this.state.problemIdx}
            </h4>
            {this.state.problems.map((problem, idx) => {
              return (
                <ProblemBox
                  problem={problem}
                  handler={{
                    incrementProblemIdx: this.incrementProblemIdx,
                    incrementScore: this.incrementScore,
                  }}
                  isVisible={
                    idx === this.state.problemIdx ? "visible" : "invisible"
                  }
                  key={idx}
                />
              );
            })}
          </section>
        </div>
      </DndProvider>
    );
  }
}

export default QuizTakingPage;
