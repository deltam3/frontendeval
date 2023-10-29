import styles from "./FaqItem.module.css";
import { IoArrowForwardSharp, IoArrowDownSharp } from "react-icons/io5";

import { useState, useEffect } from "react";

function FaqItem({ question, answer, index }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const onClickHandler = (e) => {
    if (showAnswer === true) {
      setShowAnswer(false);
    } else {
      setShowAnswer(true);
    }
  };

  useEffect(() => {
    if (index === 0) {
      setShowAnswer(true);
    }
  }, []);

  return (
    <div className={`${styles.item}`} onClick={onClickHandler}>
      <div className={styles.icon}>
        {showAnswer ? <IoArrowDownSharp /> : <IoArrowForwardSharp />}
      </div>
      <div>
        <h3>{question}</h3>
        <p>{showAnswer && answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;
