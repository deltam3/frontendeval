import { createContext, useReducer } from "react";

export const FaqsContext = createContext(null);
export const FaqsDispatchContext = createContext(null);

export function FaqsProvider({ children }) {
  const [faqs, dispatch] = useReducer(faqsReducer, initialTasks);

  return (
    <FaqsContext.Provider value={faqs}>
      <FaqsDispatchContext.Provider value={dispatch}>
        {children}
      </FaqsDispatchContext.Provider>
    </FaqsContext.Provider>
  );
}

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

// function faqsReducer(faqs: Array<FaqListItemType>, action: FaqActionType) {
//   switch (action.type) {
//     case "clicked": {
//       return faqs.map((faq) => {
//         if (faq.id === action.payload.id) {
//           return { ...faq, isOpen: !faq.isOpen };
//         }
//         return faq;
//       });
//     }
//   }
// }

function faqsReducer(draft: Array<FaqListItemType>, action: FaqActionType) {
  switch (action.type) {
    case "clickFaq": {
      const index = draft.findIndex((faq) => faq.id === action.payload.id);
      draft[index].isOpen = !draft[index].isOpen;
      break;
    }
  }
}

const initialTasks = [
  {
    id: 0,
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    id: 1,
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    id: 2,
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];
