import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <h2>FrontEnd Eval</h2>
        <p>
          <a href="https://frontendeval.com/">frontendeval.com</a>
        </p>
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
