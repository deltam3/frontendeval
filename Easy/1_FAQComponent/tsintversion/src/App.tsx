import { useContext } from "react";
import FaqItem from "./components/FaqItem";
import { FaqsContext, FaqsDispatchContext } from "./context/FaqsContext";
import { FaqItemType } from "./context/FaqsContext";

function App() {
  const dispatch = useContext(FaqsDispatchContext);
  const { faqs, FaqActionCreator } = useContext(FaqsContext);

  function handleToggleFaq(faq: FaqItemType) {
    dispatch(FaqActionCreator.toggleFaq(faq));
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
