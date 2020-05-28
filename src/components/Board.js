import React, { useContext, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/items";
import { CardContext } from "./ProblemBox";
import "../Board.css";
import AnswerCard from "./AnswerCard";

const Board = (props) => {
  const { chooseAnswer } = useContext(CardContext);
  const [cards, setCards] = useState(props.cards);
  useEffect(() => {
    setCards(props.cards);
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

  return (
    <div
      className="board"
      ref={drop}
      style={{ backgroundColor: isOver ? "#26de81" : "#d1d8e0" }}
    >
      <h3>Move answer here</h3>
      {cards.map((card, idx) => {
        return <AnswerCard content={card.content} id={card._id} />;
      })}
    </div>
  );
};

export default Board;
