import { useContext } from "react";
import FaqItem from "./components/FaqItem";
import { FaqsContext, FaqsDispatchContext } from "./context/FaqsContext";
import { FaqItemType } from "./context/FaqsContext";

import styled from "styled-components";

function App() {
  const dispatch = useContext(FaqsDispatchContext);
  const { faqs, FaqActionCreator } = useContext(FaqsContext);

  function handleToggleFaq(faq: FaqItemType) {
    dispatch(FaqActionCreator.toggleFaq(faq));
  }

  const MainEl = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `;

  const HeadingPrimary = styled.h1`
    text-align: center;
  `;

  return (
    <MainEl>
      <section>
        <HeadingPrimary>Frequently asked questions</HeadingPrimary>
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
    </MainEl>
  );
}

export default App;
