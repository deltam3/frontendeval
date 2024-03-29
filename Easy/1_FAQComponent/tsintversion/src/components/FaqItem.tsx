import React from "react";
import { useState } from "react";
import { FaqItemType } from "../App";

import { BasicAccordionItem } from "./AccordionItems";

import { VscArrowDown, VscArrowRight } from "react-icons/vsc";

import { useSpring, animated } from "react-spring";

type Props = {
  faq: FaqItemType;
  onToggleFaq: (faq: FaqItemType) => void;
};

function FaqItem({ faq, onToggleFaq }: Props) {
  const handleClick = () => {
    onToggleFaq(faq);
  };
  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "120px" : "25px" },
    config: { duration: "300" },
  });

  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff",
    },
    to: {
      transform: faq.isShown ? "rotate(360deg)" : "rotate(0deg)",
      color: open ? "#10d6f5" : "#fff",
    },
    config: { duration: "300" },
  });

  const classes = faq.isShown ? "is-nav-open" : "";
  return (
    <BasicAccordionItem className={classes} onClick={handleClick}>
      <animated.i style={iconAnimation}>
        <div>{faq.isShown ? <VscArrowDown /> : <VscArrowRight />}</div>
      </animated.i>

      <div>
        <h1>{faq.question}</h1>
        <animated.div style={openAnimation}>
          <h3>{faq.isShown && faq.answer}</h3>
        </animated.div>
      </div>
    </BasicAccordionItem>
  );
}

export default FaqItem;
