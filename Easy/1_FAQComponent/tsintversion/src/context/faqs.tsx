import { createContext, useState, useReducer } from "react";

const FaqsContext = createContext(null);
const FaqDispatchContext = createContext(null);

function Provider({ children }) {
  const [faqs, dispatch] = useReducer(faqsReducer, initialFaqs);
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

function faqsReducer(faqs, action) {
  switch (action.type) {
    case "clicked": {
      return undefined;
    }
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
