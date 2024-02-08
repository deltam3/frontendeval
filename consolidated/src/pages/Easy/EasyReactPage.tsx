import React from "react";
import { ProjectItemContainer } from "../../components/ProjectItemContainer";
import FAQPage from "./projects/FAQ/FAQPage";
import CounterPage from "./projects/Counter/CounterPage";

import { Link } from "react-router-dom";

type Props = {};

const EasyReactPage = (props: Props) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link to="/Easy/Vanillajs">Easy Project - VanillaJS Version</Link>
        <Link to="/Easy/React">Easy Projects - React Version</Link>
      </div>
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
