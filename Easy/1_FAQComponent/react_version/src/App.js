import "./App.css";
import { useState } from "react";
import FaqList from "./components/FaqList";

const faqs = [
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

function App() {
  const [questions, setQuestions] = useState(faqs);

  const handleClick = (targetId) => {
    const result = questions.map((question) => {
      if (question.id === targetId) {
        return { ...question, isShown: !question.isShown };
      }
      return { ...question, isShown: false };
    });
    setQuestions(result);
    console.log(result);
  };

  return (
    <>
      <div className="container">
        <main>
          <section className="section-faq">
            <h1 className="heading-primary center-text">
              Frequently asked questions
            </h1>
            <FaqList
              className="container"
              questions={questions}
              handleClick={handleClick}
            ></FaqList>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
