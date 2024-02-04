import React from "react";
import FAQPage from "./projects/FAQ/FAQPage";
import CounterPage from "./projects/Counter/CounterPage";
import { ProjectItemContainer } from "../../components/ProjectItemContainer";

type Props = {};

function Easy({}: Props) {
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingBottom: "2.4rem" }}>
        Easy Difficulty Projects
      </h1>
      <ProjectItemContainer>
        <FAQPage></FAQPage>
      </ProjectItemContainer>
      <ProjectItemContainer>
        <CounterPage></CounterPage>
      </ProjectItemContainer>
    </div>
  );
}

export default Easy;
