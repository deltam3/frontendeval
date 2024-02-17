import React from "react";
import { NavLink } from "react-router-dom";

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
    </div>
  );
};

export default MediumReactPage;
