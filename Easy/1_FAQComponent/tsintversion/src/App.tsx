import { useReducer } from "react";
import { useImmerReducer } from "use-immer";
// import { BasicAccordionItem } from "./components/AccordionItems";
// import useFaqsContext from "./hooks/use-faqs-context";

import styled from "styled-components";
import FaqItem from "./components/FaqItem";

export type FaqItemType = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
};

const initialFaqs = [
  {
    id: 1,
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
    isShown: true,
  },
  {
    id: 2,
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
    isShown: false,
  },
  {
    id: 3,
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    isShown: false,
  },
];

function faqsReducer(faqs, action) {
  switch (action.type) {
    case "toggled": {
      return faqs.map((faq) => {
        if (faq.id === action.faq.id) {
          return { ...faq, isShown: !faqs.isShown };
        }
        return { ...faq, isShown: false };
      });
    }
  }
}

function App() {
  const [faqs, dispatch] = useReducer(faqsReducer, initialFaqs);

  function handleToggleFaq(faq: FaqItemType) {
    dispatch({
      type: "toggled",
      faq: faq,
    });
  }

  return (
    <section>
      <h1>App</h1>
      {faqs.map((faq) => {
        return (
          <FaqItem
            key={faq.id}
            onToggleFaq={handleToggleFaq}
            faq={faq}
          ></FaqItem>
        );
      })}
    </section>
  );
}

export default App;

// use immer
// use Context API
// useReducer

// useMemo
// useCallback
// React.memo();
