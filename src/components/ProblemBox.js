import React, { createContext, useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import TargetBoard from "./TargetBoard";
import SourceBoard from "./SourceBoard";
import "./ProblemBox.css";

export const CardContext = createContext({
  chooseAnswer: null,
  unchooseAnswer: null,
  isCorrectAnswer: null,
});

const numChoice = 3;

const ProblemBox = (props) => {
  const [problem, setProblem] = useState(props.problem);
  const [isVisible, setIsVisible] = useState(props.isVisible);
  useEffect(() => {
    setIsVisible(props.isVisible);
  }, [props]);
  const [answerList, setAnswerList] = useState(
    props.problem.trackOptions
      .map((track, idx) => {
        return { id: idx, content: track, status: "notChosen", type: "track" };
      })
      .concat(
        props.problem.artistOptions.map((artist, idx) => {
          return {
            id: idx + numChoice,
            content: artist,
            status: "notChosen",
            type: "artist",
          };
        })
      )
  );

  const chooseAnswer = (id) => {
    const chosenAnswer = answerList.filter((item) => item.id === id);
    chosenAnswer[0].status = "chosen";
    setAnswerList(
      answerList.filter((item) => item.id !== id).concat(chosenAnswer[0])
    );
  };

  const unchooseAnswer = (id) => {
    const chosenAnswer = answerList.filter((item) => item.id === id);
    chosenAnswer[0].status = "notChosen";
    setAnswerList(
      answerList.filter((item) => item.id !== id).concat(chosenAnswer[0])
    );
  };

  const isCorrectAnswer = (track, artist) => {
    return track === problem.track && artist === problem.artist;
  };

  return (
    <CardContext.Provider
      value={{ chooseAnswer, unchooseAnswer, isCorrectAnswer }}
    >
      <div className={`problem-box-${isVisible}`}>
        <AudioPlayer
          className="audio-player"
          videoID={problem.videoID}
          start={problem.startSeconds}
          end={problem.endSeconds}
        />
        <SourceBoard
          cards={answerList.filter((item, idx) => item.status === "notChosen")}
        />
        <TargetBoard
          handler={props.handler}
          cards={answerList.filter((item, idx) => item.status === "chosen")}
        />
      </div>
    </CardContext.Provider>
  );
};

export default ProblemBox;
