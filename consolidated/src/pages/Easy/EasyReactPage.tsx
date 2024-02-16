import React from "react";
import { ProjectItemContainer } from "../../components/ProjectItemContainer";
import FAQPage from "./projects/FAQ/FAQPage";
import CounterPage from "./projects/Counter/CounterPage";
import "./../../components/subpage.css";

import { NavLink } from "react-router-dom";
import MortgagePage from "./projects/Mortgage/MortgagePage";
import ModalPage from "./projects/Modal/ModalPage";

type Props = {};

const EasyReactPage = (props: Props) => {
  return (
    <div className="subpage-container">
      <div style={{ textAlign: "center" }}>
        <NavLink
          to="/Easy/Vanillajs"
          className={({ isActive }) =>
            isActive ? "bg-dark btn" : "btn-default btn"
          }
        >
          Easy Project - VanillaJS Version
        </NavLink>
        <NavLink
          to="/Easy/React"
          className={({ isActive }) =>
            isActive ? "bg-dark btn" : "btn-default btn"
          }
        >
          Easy Projects - React Version
        </NavLink>
      </div>
      <h3 className="subpage-title">Easy Projects done in ReactJS</h3>
      <ProjectItemContainer>
        <FAQPage></FAQPage>
      </ProjectItemContainer>
      <ProjectItemContainer>
        <CounterPage></CounterPage>
      </ProjectItemContainer>
      <ProjectItemContainer>
        <MortgagePage></MortgagePage>
      </ProjectItemContainer>
      <ProjectItemContainer>
        <ModalPage></ModalPage>
      </ProjectItemContainer>
    </div>
  );
};

export default EasyReactPage;
