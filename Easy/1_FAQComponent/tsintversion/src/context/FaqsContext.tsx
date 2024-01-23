import { createContext, useReducer } from "react";

export const FaqsContext = createContext(null);
export const FaqsDispatchContext = createContext(null);

export type FaqItemType = {
  id: number;
  question: string;
  answer: string;
  isShown: boolean;
};

export type FAQActionType = ReturnType<typeof FaqActionCreator.toggleFaq>;

const FAQ_ACTION = {
  TOGGLED: "toggled" as const,
};

export const FaqActionCreator = {
  toggleFaq: (faq: FaqItemType) => ({
    type: FAQ_ACTION.TOGGLED,
    payload: { faq: faq },
  }),
};

function faqsReducer(faqs: Array<FaqItemType>, action: FAQActionType) {
  switch (action.type) {
    case FAQ_ACTION.TOGGLED: {
      return faqs.map((faq) => {
        if (faq.id === action.payload.faq.id) {
          return { ...faq, isShown: !faq.isShown };
        }
        return { ...faq, isShown: false };
      });
    }
    default:
      return faqs;
  }
}

export function Provider({ children }) {
  const [faqs, dispatch] = useReducer(faqsReducer, initialFaqs);

  const combinedValue = { faqs, FaqActionCreator };
  return (
    <FaqsContext.Provider value={combinedValue}>
      <FaqsDispatchContext.Provider value={dispatch}>
        {children}
      </FaqsDispatchContext.Provider>
    </FaqsContext.Provider>
  );
}

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
