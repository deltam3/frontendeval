import React from "react";
import { NavLink } from "react-router-dom";
import { ProjectItemContainer } from "../../components/ProjectItemContainer";
import MemoryPage from "./projects/MemoryGame/MemoryPage";
import UndoableCounterPage from "./projects/UndoableCounter/UndoableCounterPage";

type Props = {};

const MediumReactPage = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center">
        <NavLink
          to="/Medium/Vanillajs"
          className={({ isActive }) =>
            isActive ? "bg-dark btn" : "btn-default btn"
          }
        >
          Medium Project - VanillaJS Version
        </NavLink>
        <NavLink
          to="/Medium/React"
          className={({ isActive }) =>
            isActive ? "bg-dark btn" : "btn-default btn"
          }
        >
          Medium Project - React Version
        </NavLink>
      </div>
      <h1 className="text-center my-2 mx-4 text-2xl">
        Medium Projects done in ReactJS
      </h1>
      <ProjectItemContainer>
        <MemoryPage></MemoryPage>
      </ProjectItemContainer>
      <ProjectItemContainer>
        <UndoableCounterPage></UndoableCounterPage>
      </ProjectItemContainer>
    </div>
  );
};

export default MediumReactPage;
