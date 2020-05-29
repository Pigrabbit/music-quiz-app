import React, { useContext, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/items";
import { CardContext } from "./ProblemBox";
import "../TargetBoard.css";
import AnswerCard from "./AnswerCard";

const TargetBoard = (props) => {
  const { chooseAnswer, isCorrectAnswer } = useContext(CardContext);
  const [cards, setCards] = useState(props.cards);
  const [chosenAnswer, setChosenAnswer] = useState();

  useEffect(() => {
    setCards(props.cards);
    setChosenAnswer(props.cards);
  }, [props.cards]);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      try {
        if (hasSubmittedAlready(item.cardType))
          throw Error()
      } catch (error) {
          alert("same type submitted")
          return;
      }
      chooseAnswer(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const hasSubmittedAlready = (cardType) => {
    return chosenAnswer.some(answer => answer.type === cardType)
  }

  const handleClick = () => {
    // Todo: exception 체크
    // track 하나, artist 하나 고를 수 있도록
    if (chosenAnswer.length > 2) alert("pick a track of an artist");
    let submittedArtist = "", submittedTrack = "";
    chosenAnswer.forEach((answer) => {
      if (answer.type === "track") submittedTrack = answer.content;
      if (answer.type === "artist") submittedArtist = answer.content;
    });

    console.log(isCorrectAnswer(submittedTrack, submittedArtist));
    if (isCorrectAnswer(submittedTrack, submittedArtist))
      alert("Correct!!!")
    else
      alert("wrong answer :(")
  };

  return (
    <div
      className="target-board"
      ref={drop}
      style={{ backgroundColor: isOver ? "#26de81" : "#d1d8e0" }}
    >
      <h3>Move answer here</h3>
      {cards.map((card, idx) => {
        return <AnswerCard content={card.content} id={card.id} type={card.type}/>;
      })}
      <button className="submit" onClick={handleClick}>
        submit
      </button>
    </div>
  );
};

export default TargetBoard;
