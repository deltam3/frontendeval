import { useReducer } from "react";
import { BasicAccordionItem } from "./components/AccordionItems";
import useFaqsContext from "./hooks/use-faqs-context";

import styled from "styled-components";

function App() {
  return (
    <section>
      <h1>App</h1>
      <BasicAccordionItem></BasicAccordionItem>
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
