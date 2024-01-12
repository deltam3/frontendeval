import React, { useState } from "react";
import FAQItem from "../components/FAQItem";

export type FAQType = {
  id: number;
  question: string;
  answer: string;
};

const FAQPage = (props: Props) => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      id: 2,
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      id: 3,
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor cats live 15 years on average",
    },
  ]);

  const result = questions.map((question) => {
    return <FAQItem key={question.id} item={question}></FAQItem>;
  });

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {result}
    </div>
  );
};

export default FAQPage;
