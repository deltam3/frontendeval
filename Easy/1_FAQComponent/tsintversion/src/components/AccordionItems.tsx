import styled from "styled-components";

const BasicAccordionItem = styled.li`
  padding: 1rem 2rem;
  color: #555;
  min-width: 100rem;
  &:hover {
    background-color: gray;
  }
`;

const HoverAccordionItem = styled(BasicAccordionItem)`
  background-color: white;
`;

export { BasicAccordionItem, HoverAccordionItem };
