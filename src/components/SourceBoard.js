import React, { useContext, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/items";
import { CardContext } from "./ProblemBox";
import AnswerCard from "./AnswerCard";

const SourceBoard = (props) => {
  const { unchooseAnswer } = useContext(CardContext);
  const [cards, setCards] = useState(props.cards);

  useEffect(() => {
    setCards(props.cards);
  }, [props.cards]);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      unchooseAnswer(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      className="source-board"
      ref={drop}
    >
      {cards.map((card, idx) => {
        return <AnswerCard content={card.content} id={card.id} type={card.type} key={idx}/>;
      })}
    </div>
  );
};

export default SourceBoard;
