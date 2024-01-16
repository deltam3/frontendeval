import { createContext, useState } from "react";

const FaqsContext = createContext();

function Provider({ children }) {
  const [faqs, setFaqs] = useState([]);
  const number = 5;

  const valueToShare = {
    faqs,
    number,
  };

  return (
    <FaqsContext.Provider value={valueToShare}>{children}</FaqsContext.Provider>
  );
}

export { Provider };
export default FaqsContext;
