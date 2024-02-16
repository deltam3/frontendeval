import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const MediumReactPage = (props: Props) => {
  return (
    <div>
      <div>
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
    </div>
  );
};

export default MediumReactPage;
