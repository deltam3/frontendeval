import { BasicAccordionItem } from "./components/AccordionItems";
import useFaqsContext from "./hooks/use-faqs-context";

function App() {
  // const { number } = useContext(FaqsContext);
  const { number } = useFaqsContext();
  return (
    <main>
      <section>
        <h1>App</h1>
        <BasicAccordionItem>{number}</BasicAccordionItem>
      </section>
    </main>
  );
}

export default App;

// use immer
// use Context API
// useReducer

// useMemo
// useCallback
// React.memo();
