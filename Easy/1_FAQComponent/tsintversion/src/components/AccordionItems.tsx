import styled from "styled-components";

const BasicAccordionItem = styled.li`
  padding: 1rem 2rem;
  color: #555;
  min-width: 100rem;
  transition: margin 1s;
  margin: 0 0 0 10rem;
  // height: 4.6rem;

  & .is-nav-open margin-left: 0;

  &:hover {
    background-color: gray;
  }

  @keyframes animation-down {
    from { height: 0}
    to {height: 4.6rem}
  }
`;

const HoverAccordionItem = styled(BasicAccordionItem)`
  background-color: white;
`;

export { BasicAccordionItem, HoverAccordionItem };
