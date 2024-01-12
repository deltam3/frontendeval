import { FAQType } from "../pages/FAQPage";

type Props = {
  item: FAQType;
};

const FAQItem = (props: Props) => {
  return (
    <div>
      <p>{props.item.question}</p>
      <p>{props.item.isOpen && props.item.answer}</p>
    </div>
  );
};

export default FAQItem;
