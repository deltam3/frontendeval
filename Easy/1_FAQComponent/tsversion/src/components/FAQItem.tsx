import { FAQType } from "../pages/FAQPage";
import styled from "styled-components";

import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowDown } from "react-icons/hi";

type Props = {
  item: FAQType;
  items: Array<FAQType>;
  setQuestions: (result: Array<FAQType>) => void;
};

const FAQItem = (props: Props) => {
  const ItemBox = styled.div`
    width: 20rem;
    border: 2px solid black;
    padding: 1rem 2rem;
  `;

  const thisId = props.item.id;

  const handleClick: (e) => void = (e) => {
    const result = props.items.map((item) => {
      if (item.id === thisId) {
        return { ...item, isOpen: !item.isOpen };
      }
      return { ...item, isOpen: false };
    });
    props.setQuestions(result);
  };

  return (
    <ItemBox onClick={handleClick}>
      <p>
        {props.item.isOpen ? (
          <HiArrowNarrowDown></HiArrowNarrowDown>
        ) : (
          <HiArrowNarrowRight></HiArrowNarrowRight>
        )}
        {props.item.question}
      </p>
      <p>{props.item.isOpen && props.item.answer}</p>
    </ItemBox>
  );
};

export default FAQItem;
