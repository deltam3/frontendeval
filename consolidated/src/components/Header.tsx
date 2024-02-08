// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";

const Header = () => {
  const HeaderBox = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    gap: 2rem;
  `;
  const UlEl = styled.ul`
    display: flex;
    gap: 2rem;
    > a {
      text-decoration: none;
      color: #555;
    }

    > a:hover {
      text-decoration: underline;
    }
  `;

  return (
    <HeaderBox>
      <div>
        <div>
          <UlEl>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/Easy"
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
            >
              Easy Difficulty Projects{" "}
            </NavLink>
            <NavLink
              to="/Medium"
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
            >
              Medium Difficulty Projects{" "}
            </NavLink>
            <NavLink
              to="/Hard"
              className={({ isActive }) => {
                return isActive ? "btn menu btn-dark" : "btn menu btn-success";
              }}
            >
              Hard Difficulty Projects{" "}
            </NavLink>
          </UlEl>
        </div>
      </div>
    </HeaderBox>
  );
};

export default Header;
