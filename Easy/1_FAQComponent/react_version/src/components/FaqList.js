import React from "react";
import styles from "./FaqList.module.css";

import FaqItem from "./FaqItem";

function FaqList({ questions, handleClick }) {
  return (
    <ul className={styles.ul}>
      {questions.map((question) => (
        <li key={question.id}>
          <FaqItem
            question={question.question}
            answer={question.answer}
            isShown={question.isShown}
            id={question.id}
            handleClick={handleClick}
          ></FaqItem>
        </li>
      ))}
    </ul>
  );
}

export default FaqList;
