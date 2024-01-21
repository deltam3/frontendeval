import React from "react";
import { useState } from "react";
import { FaqItemType } from "../App";

type Props = {
  faq: FaqItemType;
  onToggleFaq: (faq: FaqItemType) => void;
};

function FaqItem({ faq, onToggleFaq }: Props) {
  const handleClick = () => {
    onToggleFaq(faq);
  };
  return (
    <div onClick={handleClick}>
      <h1>{faq.question}</h1>
      <h3>{faq.isShown && faq.answer}</h3>
    </div>
  );
}

export default FaqItem;
