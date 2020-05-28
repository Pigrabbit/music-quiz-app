import React, { useContext, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/items";
import { CardContext } from "./ProblemBox";
import "../TargetBoard.css";
import AnswerCard from "./AnswerCard";

const TargetBoard = (props) => {
  const { chooseAnswer } = useContext(CardContext);
  const [cards, setCards] = useState(props.cards);
  const [chosenAnswer, setChosenAnswer] = useState();

  useEffect(() => {
    setCards(props.cards);
    setChosenAnswer(props.cards.map(card => card.content))
  }, [props.cards]);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      chooseAnswer(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const printChosenAnswer = () => {
    console.log(chosenAnswer)
  }

  return (
    <div
      className="target-board"
      ref={drop}
      style={{ backgroundColor: isOver ? "#26de81" : "#d1d8e0" }}
    >
      <h3>Move answer here</h3>
      {cards.map((card, idx) => {
        return <AnswerCard content={card.content} id={card.id} />;
      })}
      <button className='submit' onClick={printChosenAnswer}>submit</button>
    </div>
  );
};

export default TargetBoard;
