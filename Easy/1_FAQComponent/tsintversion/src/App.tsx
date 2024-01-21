import { useReducer, useContext } from "react";
import { useImmerReducer } from "use-immer";
// import { BasicAccordionItem } from "./components/AccordionItems";
// import useFaqsContext from "./hooks/use-faqs-context";

import styled from "styled-components";
import FaqItem from "./components/FaqItem";
import { FaqActionCreator } from "./context/faqs";

import {
  FaqsContext,
  FaqsDispatchContext,
  FaqsProvider,
} from "./context/FaqsContext";

import { FaqItemType } from "./context/FaqsContext";

function App() {
  // const [faqs, dispatch] = useReducer(faqsReducer, initialFaqs);
  const dispatch = useContext(FaqsDispatchContext);
  const { faqs, FaqActionCreator } = useContext(FaqsContext);

  function handleToggleFaq(faq: FaqItemType) {
    dispatch(
      // { type: "toggled", faq: faq }
      FaqActionCreator.toggleFaq(faq)
    );
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

// export type FaqItemType = {
//   id: number;
//   question: string;
//   answer: string;
//   isOpen: boolean;
// };

// const initialFaqs = [
//   {
//     id: 1,
//     question: "How many bones does a cat have?",
//     answer: "A cat has 230 bones - 6 more than a human",
//     isShown: true,
//   },
//   {
//     id: 2,
//     question: "How much do cats sleep?",
//     answer: "The average cat sleeps 12-16 hours per day",
//     isShown: false,
//   },
//   {
//     id: 3,
//     question: "How long do cats live",
//     answer:
//       "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
//     isShown: false,
//   },
// ];

// const FAQ_ACTION = {
//   TOGGLED: "toggled" as const,
// };

// export const FaqActionCreator = {
//   toggleFaq: (faq: FaqItemType) => ({
//     type: FAQ_ACTION.TOGGLED,
//     payload: { faq: faq },
//   }),
// };

// export type FAQActionType = ReturnType<typeof FaqActionCreator.toggleFaq>;

// function faqsReducer(faqs: Array<FaqItemType>, action: FAQActionType) {
//   switch (action.type) {
//     case FAQ_ACTION.TOGGLED: {
//       return faqs.map((faq) => {
//         if (faq.id === action.payload.faq.id) {
//           return { ...faq, isShown: !faqs.isShown };
//         }
//         return { ...faq, isShown: false };
//       });
//     }
//     default:
//       return faqs;
//   }
// }
