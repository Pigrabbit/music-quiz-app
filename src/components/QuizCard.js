import React from "react";
import { Link } from "react-router-dom";
import "../QuizCard.css";

function QuizCard({ category }) {
//   const handleClick = (e) => {
//     console.log(e.target.parentNode.id);
//   };

  return (
    <article className="quizcard" id={category}>
      <h4 className="quizcard__category">{category}</h4>
      <Link to={{ pathname: "/quiz", state: { category: category } }}>
        <button className="quizcard__startBtn">
          <p>Take Quiz</p>
        </button>
      </Link>
    </article>
  );
}

export default QuizCard;
