import React from "react";
import { useState } from "react";
import { FaqItemType } from "../App";

import { BasicAccordionItem } from "./AccordionItems";

import { VscArrowDown, VscArrowRight } from "react-icons/vsc";

type Props = {
  faq: FaqItemType;
  onToggleFaq: (faq: FaqItemType) => void;
};

function FaqItem({ faq, onToggleFaq }: Props) {
  const handleClick = () => {
    onToggleFaq(faq);
  };

  const classes = faq.isShown ? "is-nav-open" : "";
  return (
    <BasicAccordionItem className={classes} onClick={handleClick}>
      <div>{faq.isShown ? <VscArrowDown /> : <VscArrowRight />}</div>
      <div>
        <h1>{faq.question}</h1>
        <h3>{faq.isShown && faq.answer}</h3>
      </div>
    </BasicAccordionItem>
  );
}

export default FaqItem;
