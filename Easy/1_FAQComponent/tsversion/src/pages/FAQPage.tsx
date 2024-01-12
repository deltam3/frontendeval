import React, { useState } from "react";
import FAQItem from "../components/FAQItem";
import styled from "styled-components";

export type FAQType = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
};

const FAQPage = () => {
  const [questions, setQuestions] = useState<Array<FAQType>>([
    {
      id: 1,
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
      isOpen: true,
    },
    {
      id: 2,
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
      isOpen: false,
    },
    {
      id: 3,
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor cats live 15 years on average",
      isOpen: false,
    },
  ]);

  const FAQPageBox = styled.div`
    max-width: 90rem;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const result = questions.map((question) => {
    return (
      <FAQItem
        key={question.id}
        item={question}
        items={questions}
        setQuestions={setQuestions}
      ></FAQItem>
    );
  });

  return (
    <FAQPageBox>
      <h1>Frequently Asked Questions</h1>
      {result}
    </FAQPageBox>
  );
};

export default FAQPage;
