import { Link } from "react-router-dom";
import styled from "styled-components";

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
            <Link to="/">Home</Link>
            <Link to="/Easy">Easy Difficulty Projects </Link>
            <Link to="/Medium">Medium Difficulty Projects </Link>
            <Link to="/Hard">Hard Difficulty Projects </Link>
          </UlEl>
        </div>
      </div>
    </HeaderBox>
  );
};

export default Header;
