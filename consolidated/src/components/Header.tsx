import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/Easy">Easy Difficulty Projects </Link>
            <Link to="/Medium">Medium Difficulty Projects </Link>
            <Link to="/Hard">Hard Difficulty Projects </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
