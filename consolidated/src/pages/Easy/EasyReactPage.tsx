import React from "react";
import { ProjectItemContainer } from "../../components/ProjectItemContainer";
import FAQPage from "./projects/FAQ/FAQPage";
import CounterPage from "./projects/Counter/CounterPage";
type Props = {};

const EasyReactPage = (props: Props) => {
  return (
    <div>
      <h3>Easy Projects done in ReactJS</h3>
      <ProjectItemContainer>
        <FAQPage></FAQPage>
      </ProjectItemContainer>
      <ProjectItemContainer>
        <CounterPage></CounterPage>
      </ProjectItemContainer>
    </div>
  );
};

export default EasyReactPage;
