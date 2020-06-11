import React, { useContext, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/items";
import { CardContext } from "./ProblemBox";
import "./TargetBoard.css";
import AnswerCard from "./AnswerCard";

const TargetBoard = (props) => {
  const { chooseAnswer, isCorrectAnswer } = useContext(CardContext);
  const [cards, setCards] = useState(props.cards);
  const [chosenAnswer, setChosenAnswer] = useState();
  const { incrementProblemIdx, incrementScore } = props.handler;

  useEffect(() => {
    setCards(props.cards);
    setChosenAnswer(props.cards);
  }, [props.cards]);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      try {
        if (hasSubmittedAlready(item.cardType)) throw Error();
      } catch (error) {
        alert("same type submitted");
        return;
      }
      chooseAnswer(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const hasSubmittedAlready = (cardType) => {
    return chosenAnswer.some((answer) => answer.type === cardType);
  };

  const handleClick = () => {
    if (chosenAnswer.length > 2) alert("pick a track of an artist");
    let submittedArtist = "",
      submittedTrack = "";
    chosenAnswer.forEach((answer) => {
      if (answer.type === "track") submittedTrack = answer.content;
      if (answer.type === "artist") submittedArtist = answer.content;
    });

    if (isCorrectAnswer(submittedTrack, submittedArtist)) {
      incrementScore();
    }
    incrementProblemIdx();
  };

  return (
    <div
      className="target-board"
      ref={drop}
      style={{ backgroundColor: isOver ? "#26de81" : "#d1d8e0" }}
    >
      <h3 className="target-board__instruction">Move answer here</h3>
      {cards.map((card, idx) => {
        return (
          <AnswerCard
            content={card.content}
            id={card.id}
            type={card.type}
            key={idx}
          />
        );
      })}
      <button className="target-board__submit-btn" onClick={handleClick}>
        submit
      </button>
    </div>
  );
};

export default TargetBoard;
