import React, { createContext, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import Board from "./Board";
import "../ProblemBox.css";
import AnswerCard from "./AnswerCard";

export const CardContext = createContext({
  chooseItem: null,
});

const ProblemBox = (props) => {
  const [problem, _] = useState(props.problem);
  const [answerList, setAnswerList] = useState([
    {
      id: 1,
      content: "haha",
      status: "notChosen",
    },
    {
      id: 2,
      content: "lalalalal",
      status: "notChosen",
    },
    {
      id: 3,
      content: "doremi",
      status: "notChosen",
    },
  ]);

  const chooseAnswer = (id) => {
    const chosenAnswer = answerList.filter((item) => item.id === id);
    chosenAnswer[0].status = "chosen";    
    setAnswerList(
      answerList.filter((item) => item.id !== id).concat(chosenAnswer[0])
    );
  };

  return (
    <CardContext.Provider value={{ chooseAnswer }}>
      <div className="problem-box">
        <AudioPlayer
          className="audio-player"
          videoID={problem.videoID}
          start={problem.startSeconds}
          end={problem.endSeconds}
        />
        <div className="answer-box">
          {answerList
            .filter((item, idx) => item.status === "notChosen")
            .map((item, idx) => {
              return <AnswerCard content={item.content} id={item.id} />;
            })}
        </div>
        <Board
          className="board"
          cards={answerList.filter((item, idx) => item.status === "chosen")}
        />
      </div>
    </CardContext.Provider>
  );
};

export default ProblemBox;
