import React from "react";
import styles from "./FaqList.module.css";

import FaqItem from "./FaqItem";

function FaqList({ faqs }) {
  return (
    <ul className={styles.ul}>
      {faqs.map((faq, index) => (
        <li key={faq.answer}>
          <FaqItem
            question={faq.question}
            answer={faq.answer}
            index={index}
          ></FaqItem>
        </li>
      ))}
    </ul>
  );
}

export default FaqList;
