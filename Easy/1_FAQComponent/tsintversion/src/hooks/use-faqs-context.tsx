import { useContext } from "react";
import FaqsContext from "../context/faqs";\

function useFaqsContext() {
  return useContext(FaqsContext);
}

export default useFaqsContext;
