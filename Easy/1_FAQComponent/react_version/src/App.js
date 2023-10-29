import "./App.css";

import FaqList from "./components/FaqList";

const faqs = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

function App() {
  return (
    <>
      <div className="container">
        <main>
          <section className="section-faq">
            <h1 className="heading-primary center-text">
              Frequently asked questions
            </h1>
            <FaqList className="container" faqs={faqs}></FaqList>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
