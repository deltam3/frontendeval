import styled from "styled-components";

const BasicAccordionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 1rem 2rem;
  color: #555;
  min-width: 100rem;
  transition: margin 1s;
  margin: 0 0 0 10rem;

  & .is-nav-open margin-left: 0;

  &:hover {
    background-color: gray;
  }

`;

const HoverAccordionItem = styled(BasicAccordionItem)`
  background-color: white;
`;

export { BasicAccordionItem, HoverAccordionItem };
