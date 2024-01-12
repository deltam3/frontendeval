import { Factory } from "react";
import { FAQType } from "../pages/FAQPage";
import styled from "styled-components";

type Props = {
  item: FAQType;
  items: Array<FAQType>;
  setQuestions: (result: Array<FAQType>) => void;
};

const FAQItem = (props: Props) => {
  const ItemBox = styled.div`
    border: 2px solid black;
    padding: 1rem 2rem;
  `;

  const thisId = props.item.id;

  const handleClick: () => void = () => {
    const result: Array<FAQType> = props.items.map((item) => {
      if (item.id === thisId) {
        return { ...item, isOpen: !item.isOpen };
      }
    });
    props.setQuestions(result);
  };

  return (
    <ItemBox onClick={handleClick}>
      <p>{props.item.question}</p>
      {/* <p>{props.item.isOpen && props.item.answer}</p> */}
      <p>{props.item.answer}</p>
    </ItemBox>
  );
};

export default FAQItem;
