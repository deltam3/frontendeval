import React from "react";
import { useState } from "react";
import { FaqItemType } from "../App";

import { BasicAccordionItem } from "./AccordionItems";

type Props = {
  faq: FaqItemType;
  onToggleFaq: (faq: FaqItemType) => void;
};

function FaqItem({ faq, onToggleFaq }: Props) {
  const handleClick = () => {
    onToggleFaq(faq);
  };
  return (
    <BasicAccordionItem onClick={handleClick}>
      <h1>{faq.question}</h1>
      <h3>{faq.isShown && faq.answer}</h3>
    </BasicAccordionItem>
  );
}

export default FaqItem;
