import styles from "./FaqItem.module.css";
import { IoArrowForwardSharp, IoArrowDownSharp } from "react-icons/io5";

function FaqItem({ question, answer, id, handleClick, isShown }) {
  const onClickHandler = (e) => {
    if (isShown === true) {
      handleClick(id);
    } else if (isShown === false) {
      handleClick(id);
    }
  };

  return (
    <div className={`${styles.item}`} onClick={() => onClickHandler()}>
      <div className={styles.icon}>
        {isShown ? <IoArrowDownSharp /> : <IoArrowForwardSharp />}
      </div>
      <div>
        <h3>{question}</h3>
        <p>{isShown && answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;
