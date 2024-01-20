import { createContext, useState, useReducer } from "react";
import { useImmerReducer } from "use-immer";

const FaqsContext = createContext(null);
const FaqDispatchContext = createContext(null);

export type FaqListItemType = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
};

export const FAQ_ACTION = {
  CLICKED: "clickFaq" as const,
};

export const FaqActionCreator = {
  clickFaq: (id: number) => ({ type: FAQ_ACTION.CLICKED, payload: { id: id } }),
};

export type FaqActionType = ReturnType<typeof FaqActionCreator.clickFaq>;

function Provider({ children }) {
  const [faqs, dispatchFaqList] = useImmerReducer(faqsReducer, initialFaqs);
  const number = 5;

  const valueToShare = {
    faqs,
    number,
  };

  return (
    <FaqsContext.Provider value={valueToShare}>
      <FaqDispatchContext.Provider value={dispatch}>
        {children}
      </FaqDispatchContext.Provider>
    </FaqsContext.Provider>
  );
}

function faqsReducer(state: Array<FaqListItemType>, action: FaqActionType) {
  switch (action.type) {
    case FAQ_ACTION.CLICKED:
      return 4;
    // return dispatchFaqList();
  }
}

const initialFaqs = [
  {
    id: 0,
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
    isOpen: true,
  },
  {
    id: 1,
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
    isOpen: false,
  },
  {
    id: 2,
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    isOpen: false,
  },
];

export { Provider };
export default FaqsContext;
