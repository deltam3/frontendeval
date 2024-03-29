import React from "react";
import { useState } from "react";
import { FAQType } from "../pages/Easy/projects/FAQ/FAQPage";
import "./Accordion.css";

import { VscArrowDown, VscArrowRight } from "react-icons/vsc";

import { useSpring, animated } from "@react-spring/web";

type Props = {
  item: FAQType;
  items: Array<FAQType>;
  setQuestions: () => void;
  onToggleAccordionItem: (item: FAQType) => void;
};

function Accordion({ item, onToggleAccordionItem }: Props) {
  const handleClick = () => {
    onToggleAccordionItem(item);
  };
  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "120px" : "25px" },
    config: { duration: "300" },
  });

  const iconAnimation = useSpring({
    from: {
      transform: item.isOpen ? "rotate(0deg)" : "rotate(360deg)",
      color: "#10d6f5",
    },
    to: {
      transform: item.isOpen ? "rotate(360deg)" : "rotate(0deg)",
    },
    config: { duration: "300" },
  });

  return (
    <div className="accordion" onClick={handleClick}>
      {/* <div
      className="flex align-center gap-2 list-none py-4 px-8 text-zinc-800 max-w-96"
      onClick={handleClick}
    > */}
      <animated.i style={iconAnimation}>
        <div>{item.isOpen ? <VscArrowDown /> : <VscArrowRight />}</div>
      </animated.i>

      <div>
        <h1>{item.question}</h1>
        <animated.div style={openAnimation}>
          <h3>{item.isOpen && item.answer}</h3>
        </animated.div>
      </div>
    </div>
  );
}

export default Accordion;
