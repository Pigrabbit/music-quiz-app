import React, { useState, useEffect } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/items";
import "../AnswerCard.css";

const AnswerCard = (props) => {
  const [content, setContent] = useState(props.content);
  useEffect(() => {
    setContent(props.content);
  }, [props.content]);
  
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      id: props.id,
      content: props.content,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className="answer-card"
      id={props.id}
      ref={drag}
      style={{ opacity: isDragging ? "0.5" : "1" }}
    >
      <h4>{content}</h4>
    </div>
  );
};

export default AnswerCard;
